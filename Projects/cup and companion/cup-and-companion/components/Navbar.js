import React from "react";

const Navbar = () => {
	return (
		<nav className="bg-gray-950 text-white flex justify-between px-8 h-[7vh] items-center">
			<div className="logo font-bold"> Cup & Companion!</div>
			<ul className="flex gap-12 items-center">
				<li>Home</li>
				<li>About</li>
				<li>Projects</li>
				<li>Sign Up</li>
				<li>Login</li>
			</ul>
		</nav>
	);
};

export default Navbar;
