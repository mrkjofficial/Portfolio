import { motion } from "framer-motion";
import { experiences } from "../constants";
import Image, { StaticImageData } from "next/image";
import "react-vertical-timeline-component/style.min.css";
import { staggerContainer, textVariant } from "../utils/motions";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

const Timeline = () => {
	type ExperienceProps = {
		experience: {
			title: string;
			organization: string;
			icon: StaticImageData;
			background: string;
			date: string;
			points: string[];
		};
	};
	const Experience = ({ experience }: ExperienceProps) => {
		type PointsProps = {
			point: string;
		};
		const Points = ({ point }: PointsProps) => {
			return (
				<li className="timeline__element-point">{point}</li>
			)
		}
		return (
			<VerticalTimelineElement contentArrowStyle={{ borderRight: "7px solid  #232631" }} contentStyle={{ background: "#1d1836", color: "#fff" }} date={experience.date} icon={<Image alt={experience.organization} className="timeline__element-icon" src={experience.icon} />} iconStyle={{ background: experience.background }}>
				<div>
					<h3 className="timeline__element-title">{experience.title}</h3>
					<p className="timeline__element-subtitle">{experience.organization}</p>
				</div>
				<ul className="timeline__element-points">
					{experience.points.map((point, index) => (
						<Points key={`pt-${index}`} point={point} />
					))}
				</ul>
			</VerticalTimelineElement>
		);
	};
	return (
		<motion.section className="timeline__container" id="timeline" initial="hidden" variants={staggerContainer()} viewport={{ once: true, amount: 0.25 }} whileInView="show">
			<motion.div className="timeline__wrapper" variants={textVariant()}>
				<p className="timeline__subtitle">What I have done so far</p>
				<h2 className="timeline__title">Timeline.</h2>
			</motion.div>
			<VerticalTimeline className="timeline__content">
				{experiences.slice(0).reverse().map((experience, index) => (
					<Experience experience={experience} key={`exp-${index}`} />
				))}
			</VerticalTimeline>
		</motion.section>
	);
};

export default Timeline;
