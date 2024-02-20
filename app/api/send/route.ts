import { Resend } from "resend";
import { list } from "@vercel/blob";
import { Contact, Reply } from "@emails";
import { APP_NAME, firstName } from "@data";
import { render } from "@react-email/render";
import { ratelimit } from "@config/ratelimit";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
	try {
		const ip = request.ip ?? "127.0.0.1";
		const { limit, remaining, reset } = await ratelimit.limit(ip);
		if (remaining === 0) {
			const response = NextResponse.json({ message: "Rate limit exceeded!" }, { status: 429 });
			response.headers.set("X-RateLimit-Limit", limit.toString());
			response.headers.set("X-RateLimit-Remaining", remaining.toString());
			response.headers.set("X-RateLimit-Reset", reset.toString());
			return response;
		} else {
			const { name, email, message } = (await request.json()) as { name: string; email: string; message: string };

			if (!name || !email || !message) {
				const response = NextResponse.json({ message: "Invalid request!" }, { status: 400 });
				return response;
			}
			const path = process.env.BLOB_PATH as string;
			const data = await list({ limit: 1, prefix: `${path}/logo` });
			const url = data?.blobs?.at(0)?.url as string;

			const promises = [sendMessage(url, name, email, message), autoReply(url, name, email)];
			await Promise.all(promises);

			const response = NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
			response.headers.set("X-RateLimit-Limit", limit.toString());
			response.headers.set("X-RateLimit-Remaining", remaining.toString());
			response.headers.set("X-RateLimit-Reset", reset.toString());
			return response;
		}
	} catch (error: unknown) {
		const response = NextResponse.json({ message: "Internal server error!" }, { status: 500 });
		return response;
	}
}

async function sendMessage(url: string, name: string, email: string, message: string) {
	const htmlTemplate = render(
		Contact({
			logoURL: url,
			senderName: name,
			recipientName: firstName,
			message,
			appURL: process.env.NEXT_PUBLIC_URL as string,
			appName: APP_NAME,
		}),
		{ pretty: true }
	);

	const textTemplate = render(
		Contact({
			logoURL: url,
			senderName: name,
			recipientName: firstName,
			message,
			appURL: process.env.NEXT_PUBLIC_URL as string,
			appName: APP_NAME,
		}),
		{ plainText: true }
	);

	return resend.emails.send({
		from: `${firstName} <${process.env.CONTACT_EMAIL_ADDRESS}>`,
		to: [process.env.PERSONAL_EMAIL_ADDRESS as string],
		subject: `Message from ${name}`,
		html: htmlTemplate,
		text: textTemplate,
		reply_to: email,
	});
}

async function autoReply(url: string, name: string, email: string) {
	const htmlTemplate = render(
		Reply({
			logoURL: url,
			senderName: firstName,
			recipientName: name,
			appURL: process.env.NEXT_PUBLIC_URL as string,
			appName: APP_NAME,
		}),
		{ pretty: true }
	);

	const textTemplate = render(
		Reply({
			logoURL: url,
			senderName: firstName,
			recipientName: name,
			appURL: process.env.NEXT_PUBLIC_URL as string,
			appName: APP_NAME,
		}),
		{ plainText: true }
	);

	return resend.emails.send({
		from: `${firstName} <${process.env.CONTACT_EMAIL_ADDRESS}>`,
		to: [email],
		subject: `Message from ${firstName}`,
		html: htmlTemplate,
		text: textTemplate,
		reply_to: process.env.PERSONAL_EMAIL_ADDRESS as string,
	});
}
