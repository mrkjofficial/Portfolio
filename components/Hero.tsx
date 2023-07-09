import { motion } from "framer-motion";
import { DesktopCanvas } from "./canvas/";
import { introduction } from "@constants";

const Hero = () => {
	return (
		<section className="hero__container">
			<div className="hero__wrapper">
				<div className="hero__shapes">
					<div className="hero__circle" />
					<div className="hero__line" />
				</div>
				<div className="hero__introduction">
					<h1>{introduction.greeting} <span>{introduction.name}</span></h1>
					<p>{introduction.about}</p>
				</div>
			</div>
			<DesktopCanvas />
			<div className="hero__next-section-link">
				<a aria-label="about" href="#about">
					<div className="hero__next-section-shape">
						<motion.div animate={{ y: [0, 24, 0] }} className="hero__next-section-circle" transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }} />
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
