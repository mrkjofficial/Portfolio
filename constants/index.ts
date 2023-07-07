import {
	backend,
	creator,
	mobile,
	web,
	enterpriseMinds,
	pondicherryUniversity,
	siliguriInstituteOfTechnology,
	css,
	docker,
	figma,
	git,
	html,
	javascript,
	mongodb,
	nodejs,
	reactjs,
	redux,
	tailwind,
	typescript,
	threejs,
	advancegpt,
	aura,
} from "../assets";

const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "works",
		title: "Works",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const introduction = {
	greeting: "Hi, I'm",
	name: "Karan",
	about: "I develop front-end and back-end code for websites and web applications.",
};

const about =
	"I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!";

const services = [
	{
		title: "Web Developer",
		icon: web.src,
	},
	{
		title: "React Native Developer",
		icon: mobile.src,
	},
	{
		title: "Backend Developer",
		icon: backend.src,
	},
	{
		title: "Content Creator",
		icon: creator.src,
	},
];

const experiences = [
	{
		title: "Bachelor of Computer Application",
		organization: "Siliguri Institute of Technology",
		icon: siliguriInstituteOfTechnology.src,
		background: "#fff",
		date: "June 2015 - May 2018",
		points: [
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
			"Developing and maintaining web applications using React.js and other related technologies.",
		],
	},
	{
		title: "Master of Computer Application",
		organization: "Pondicherry University",
		icon: pondicherryUniversity.src,
		background: "#fff",
		date: "October 2021 - May 2023",
		points: [
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
			"Developing and maintaining web applications using React.js and other related technologies.",
		],
	},
	{
		title: "Web Developer Intern",
		organization: "Enterprise Minds Inc",
		icon: enterpriseMinds.src,
		background: "#fff",
		date: "Jan 2023 - April 2023",
		points: [
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
			"Developing and maintaining web applications using React.js and other related technologies.",
		],
	},
];

const techs = [
	{
		name: "HTML 5",
		icon: html.src,
	},
	{
		name: "CSS 3",
		icon: css.src,
	},
	{
		name: "JavaScript",
		icon: javascript.src,
	},
	{
		name: "TypeScript",
		icon: typescript.src,
	},
	{
		name: "React JS",
		icon: reactjs.src,
	},
	{
		name: "Redux Toolkit",
		icon: redux.src,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind.src,
	},
	{
		name: "Node JS",
		icon: nodejs.src,
	},
	{
		name: "MongoDB",
		icon: mongodb.src,
	},
	{
		name: "Three JS",
		icon: threejs.src,
	},
	{
		name: "git",
		icon: git.src,
	},
	{
		name: "figma",
		icon: figma.src,
	},
	{
		name: "docker",
		icon: docker.src,
	},
];

const works =
	"Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.";

const projects = [
	{
		title: "AdvanceGPT",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "firebase",
				color: "blue",
			},
			{
				name: "nextjs",
				color: "red",
			},
			{
				name: "openai",
				color: "yellow",
			},
			{
				name: "tailwind",
				color: "green",
			},
		],
		image: advancegpt.src,
		source_code_link: "https://github.com/mrkjofficial/AdvanceGPT",
	},
	{
		title: "Aura",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "nodejs",
				color: "blue",
			},
			{
				name: "reactjs",
				color: "red",
			},
			{
				name: "redux",
				color: "yellow",
			},
			{
				name: "sass",
				color: "green",
			},
		],
		image: aura.src,
		source_code_link: "https://github.com/mrkjofficial/Aura",
	},
];

export { navLinks, introduction, about, services, experiences, techs, works, projects };
