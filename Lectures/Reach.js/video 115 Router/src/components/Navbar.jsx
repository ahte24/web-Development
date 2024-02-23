/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<nav>
				<NavLink
					className={(e) => {
						return e.isActive ? "red" : "";
					}}
					to="/"
				>
					Home
				</NavLink>
				<NavLink
					className={(e) => {
						return e.isActive ? "red" : "";
					}}
					to="/about"
				>
					About Us
				</NavLink>
				<NavLink
					className={(e) => {
						return e.isActive ? "red" : "";
					}}
					to="/login"
				>
					Login
				</NavLink>
			</nav>
		</div>
	);
};

export default Navbar;
