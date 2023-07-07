import { Tilt } from "react-tilt";
import { github } from "../assets";
import { motion } from "framer-motion";
import { projects, works } from "../constants";
import Image, { StaticImageData } from "next/image";
import { fadeIn, staggerContainer, textVariant } from "../utils/motions";

const Works = () => {
	type ProjectProps = {
		index: number;
		project: {
			title: string;
			description: string;
			tags: {
				name: string;
				color: string;
			}[];
			image: StaticImageData;
			source_code_link: string;
		};
	};
	const Project = ({ index, project }: ProjectProps) => {
		return (
			<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
				<Tilt className="works__element-card" options={{ max: 45, scale: 1, speed: 450 }}>
					<div className="works__element-image-box">
						<Image alt="project-image" className="works__element-image" src={project.image} />
						<div className="works__element-link" onClick={() => window.open(project.source_code_link, "_blank")}>
							<Image alt="github" className="works__element-github-icon" src={github} />
						</div>
					</div>
					<div className="mt-5">
						<h3 className="works__element-title">{project.title}</h3>
						<p className="works__element-text">{project.description}</p>
					</div>
					<div className="works__element-tags">
						{project.tags.map((tag) => (
							<p className={`works__element-tag ${tag.color}`} key={`${project.title}-${tag.name}`}>
								#{tag.name}
							</p>
						))}
					</div>
				</Tilt>
			</motion.div>
		);
	};
	return (
		<motion.section className="works__container" id="works" initial="hidden" variants={staggerContainer()} viewport={{ once: true, amount: 0.25 }} whileInView="show">
			<div className="works__wrapper">
				<motion.div variants={textVariant()}>
					<p className="works__subtitle">My works</p>
					<h2 className="works__title">Projects.</h2>
				</motion.div>
				<motion.p className="works__text" variants={fadeIn("", "", 0.1, 1)}>
					{works}
				</motion.p>
			</div>
			<div className="works__item">
				{projects.map((project, index) => (
					<Project index={index} key={`pr-${index}`} project={project} />
				))}
			</div>
		</motion.section>
	);
};

export default Works;
