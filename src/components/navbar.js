import React from "react";
import logoIcon from "../assets/img/1111.png";
import logoIcon2 from "../assets/img/2222.png";
import logoIcon3 from "../assets/img/3333.png";
import logoIcon4 from "../assets/img/4444.png";

function Navbar() {
	return (
		<nav className="navbar-top">
			<div className="class-nav">
				<a href="/about">
					<img src={logoIcon} alt="LogoIcon" className="w-75" />
				</a>
				<a href="/pencatatan">
					<img src={logoIcon2} alt="LogoIcon" className="w-75" />
				</a>
				<a href="/setting">
					<img src={logoIcon4} alt="LogoIcon" className="w-75" />
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
