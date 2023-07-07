import { techs } from "../constants";
import { BallCanvas } from "./canvas/";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motions";

const Tech = () => {
	return (
		<motion.section className="tech__container" id="tech" initial="hidden" variants={staggerContainer()} viewport={{ once: true, amount: 0.25 }} whileInView="show">
			<div className="tech__wrapper">
				{techs.map((tech) => (
					<div className="tech__item" key={tech.name}>
						<BallCanvas icon={tech.icon} />
					</div>
				))}
			</div>
		</motion.section>
	);
};

export default Tech;
