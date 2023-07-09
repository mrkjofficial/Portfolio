"use client"
import { ToastContainer } from "react-toastify";
import { StarsCanvas } from "@components/canvas";
import { About, Contact, Hero, Navbar, Tech, Timeline, Works } from "@components";

const App = () => {
	return (
		<>
			<ToastContainer autoClose={5000} closeOnClick hideProgressBar={false} newestOnTop position="top-center" theme="dark" />
			<div className="app__container">
				<div className="app__wrapper">
					<Navbar />
					<Hero />
				</div>
				<About />
				<Timeline />
				<Tech />
				<Works />
				<div className="app__contact-box">
					<div className="app__stars-box">
						<StarsCanvas />
					</div>
					<Contact />
				</div>
			</div>
		</>
	);
};

export default App;
