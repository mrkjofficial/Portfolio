"use client"
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { EarthCanvas } from "./canvas";
import { useRef, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { slideIn, staggerContainer } from "@utils/motions";

const Contact = () => {
	const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
	const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
	const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
	const formRef = useRef<HTMLFormElement>(null);
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const success = () => toast.success("Message Sent Successfully!");
	const failure = () => toast.error("Message Sending Failed!");
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { target } = e;
		const { name, value } = target;
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		emailjs
			.send(
				serviceId,
				templateId,
				{
					from_name: form.name,
					to_name: "Karan Jaiswal",
					from_email: form.email,
					to_email: "karanjaiswal0000@gmail.com",
					message: form.message,
				},
				publicKey
			)
			.then(
				() => {
					setLoading(false);
					success();
					setForm({ name: "", email: "", message: "" });
				})
			.catch((error) => {
				setLoading(false);
				failure();
				console.log(error.text);
			});
	};
	return (
		<motion.section className="contact__container" id="contact" initial="hidden" variants={staggerContainer()} viewport={{ once: true, amount: 0.25 }} whileInView="show">
			<div className="contact__wrapper">
				<motion.div className="contact__form-box" variants={slideIn("left", "tween", 0.2, 1)}>
					<p className="contact__subtitle">Get in touch</p>
					<h3 className="contact__title">Contact.</h3>
					<form className="contact__form" onSubmit={handleSubmit} ref={formRef}>
						<label htmlFor="name">
							<span>Your Name</span>
							<input name="name" id="name" onChange={handleChange} placeholder="What's your good name?" required type="text" value={form.name} />
						</label>
						<label htmlFor="email">
							<span>Your email</span>
							<input name="email" id="email" onChange={handleChange} placeholder="What's your email address?" required type="email" value={form.email} />
						</label>
						<label htmlFor="message">
							<span>Your Message</span>
							<textarea name="message" id="message" onChange={handleChange} placeholder="What's your message?" required rows={7} value={form.message} />
						</label>
						<button type="submit">
							{loading ? "Sending..." : "Send"}
						</button>
					</form>
				</motion.div>
				<motion.div className="contact__earth-box" variants={slideIn("right", "tween", 0.2, 1)}>
					<EarthCanvas />
				</motion.div>
			</div>
		</motion.section>
	);
};

export default Contact;
