import React from "react";
import { slide as Menu } from "react-burger-menu";

import logo from "./images/dog-logo.png";
import "./header.css";

export default function header() {
	return (
		<div className="header-container">
			<Menu>
				<a id="home" className="menu-item" href="">
					Home
				</a>
				<a id="services" className="menu-item" href="">
					Services
				</a>
				<a id="health-wellness" className="menu-item" href="">
					Health & Wellness
				</a>
				<a id="resources" className="menu-item" href="">
					Resources
				</a>
				<a id="deals" className="menu-item" href="">
					Deals
				</a>
			</Menu>
			<img src={logo} alt="dog-logo" className="dog-logo-img" />
			<h2 className="header-title">The Pet Nanny Network</h2>
		</div>
	);
}
