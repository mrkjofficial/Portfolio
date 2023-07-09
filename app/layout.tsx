import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
	title: "MRKJOFFICIAL",
	description: "Personal Portfolio of Karan Jaiswal",
};

type Props = {
	children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
	return (
		<html lang="en">
			<body className={poppins.className}>{children}</body>
		</html>
	);
};

export default RootLayout;
