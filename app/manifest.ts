import { MetadataRoute } from "next";
import { APP_DESCRIPTION, APP_NAME } from "@data";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: APP_NAME,
		short_name: APP_NAME,
		description: APP_DESCRIPTION,
		start_url: "/",
		scope: "/",
		display: "standalone",
		background_color: "#FFFFFF",
		theme_color: "#FFFFFF",
		icons: [
			{
				src: "icons/icon-192x192.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "icons/icon-256x256.png",
				sizes: "256x256",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "icons/icon-384x384.png",
				sizes: "384x384",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "icons/icon-512x512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "icons/icon-192x192.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "maskable",
			},
			{
				src: "icons/icon-256x256.png",
				sizes: "256x256",
				type: "image/png",
				purpose: "maskable",
			},
			{
				src: "icons/icon-384x384.png",
				sizes: "384x384",
				type: "image/png",
				purpose: "maskable",
			},
			{
				src: "icons/icon-512x512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable",
			},
		],
	};
}
