/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	mode: "jit",
	theme: {
		extend: {
			animation: {
				"spin-slow": "spin 3s linear infinite",
			},
			backgroundImage: {
				pattern: "url('/background.webp')",
			},
			boxShadow: {
				card: "0px 35px 120px -15px #211e35",
			},
			colors: {
				primary: "#050816",
				secondary: "#aaa6c3",
				tertiary: "#151030",
				"black-100": "#100d25",
				"black-200": "#090325",
				"white-100": "#f3f3f3",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			height: {
				128: "512px",
				192: "768px",
				256: "1024px",
			},
			screens: {
				xs: "512px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
			},
		},
	},
	plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
