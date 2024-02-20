import React from "react";

const navbar = () => {
	return (
		<nav className="flex sticky top-0 justify-between py-3 px-8 bg-purple-700 text-white ">
			<div className="logo font-bold cursor-pointer hover:text-purple-200 transition-all">
				<span>iTask</span>
			</div>
			<ul className="flex gap-5">
				<li className="cursor-pointer hover:text-purple-200 transition-all ">
					Home
				</li>
				<li className="cursor-pointer hover:text-purple-200 transition-all ">
					About Us
				</li>
			</ul>
		</nav>
	);
};

export default navbar;
