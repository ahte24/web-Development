import React from "react";

const Footer = () => {
	const currentYear = new Date().getFullYear()
	return (

		<footer className="bg-gray-950 text-white flex px-5 h-[8vh] items-center justify-center ">
			<p className="text-center md:text-lg ">
				Copyright &copy; {currentYear} Cup and Companion - All rights reserved!
			</p>
		</footer>
	);
};

export default Footer;
