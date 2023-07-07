import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { about, services } from "../constants";
import { staggerContainer } from "../utils/motions";
import { fadeIn, textVariant } from "../utils/motions";

const About = () => {
	type ServiceProps = {
		index: number;
		service: {
			title: string;
			icon: string;
		};
	};
	const Service = ({ index, service }: ServiceProps) => {
		return (
			<Tilt className="about__element-card">
				<motion.div className="about__element-box" variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
					<div className="about__element-service">
						<img alt={service.title} className="about__element-icon" src={service.icon} />
						<h3 className="about__element-text">{service.title}</h3>
					</div>
				</motion.div>
			</Tilt>
		);
	}
	return (
		<motion.section className="about__container" id="about" initial="hidden" variants={staggerContainer()} viewport={{ once: true, amount: 0.25 }} whileInView="show">
			<div className="about__wrapper">
				<motion.div variants={textVariant()}>
					<p className="about__subtitle">Introduction</p>
					<h2 className="about__title">Overview.</h2>
				</motion.div>
				<motion.p className="about__text" variants={fadeIn("", "", 0.1, 1)}>
					{about}
				</motion.p>
			</div>
			<div className="about__card-group">
				{services.map((service, index) => (
					<Service index={index} key={`s-${index}`} service={service} />
				))}
			</div>
		</motion.section>
	);
};

export default About;
