import React from "react";
import Button from "./Button";

const Navbar = (props) => {
	return (
		<>
			<div>Navbar</div>
			<Button count={props.count} />
		</>
	);
};

export default Navbar;
