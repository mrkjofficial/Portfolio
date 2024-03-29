import styles from "./home.module.css";
import { About, Contact, Footer, Hero, Projects } from "@components";

export default function Home() {
	return (
		<main className={styles["main-container"]}>
			<Hero />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</main>
	);
}
