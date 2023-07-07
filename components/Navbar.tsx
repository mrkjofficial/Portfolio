import Link from "next/link";
import { logo } from "../assets";
import { navLinks } from "../constants";
import { useEffect, useState } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			scrollTop > 100 ? setScrolled(true) : setScrolled(false);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<nav className={`navbar__container ${scrolled ? "bg-primary" : "bg-transparent"}`}>
			<div className="navbar__wrapper">
				<Link
					className="navbar__logo-link"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
					href="/"
				>
					<img alt="logo" className="navbar__logo-icon" src={logo.src} />
					<p className="navbar__logo-text">MRKJOFFICIAL</p>
				</Link>
				<ul className="navbar__nav-links">
					{navLinks.map((nav) => (
						<li className={`navbar__nav-link ${active === nav.id ? "text-white" : "text-secondary"}`} key={nav.id} onClick={() => setActive(nav.id)}>
							<a aria-label={nav.title} href={`#${nav.id}`}>
								{nav.title}
							</a>
						</li>
					))}
				</ul>
				<div className="navbar__mobile-menu" onClick={() => setToggle(!toggle)}>
					<div className="navbar__mobile-menu-toggle-icon">{toggle ? <CloseOutlined /> : <MenuOutlined />}</div>
					<div className={`navbar__mobile-menu-dropdown ${!toggle ? "hidden" : "flex"}`}>
						<ul className="navbar__mobile-nav-links">
							{navLinks.map((nav) => (
								<li
									className={`navbar__mobile-nav-link ${active === nav.title ? "text-white" : "text-secondary"}`}
									onClick={() => {
										setToggle(!toggle);
										setActive(nav.id);
									}}
									key={nav.id}
								>
									<a aria-label={nav.title} href={`#${nav.id}`}>
										{nav.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
