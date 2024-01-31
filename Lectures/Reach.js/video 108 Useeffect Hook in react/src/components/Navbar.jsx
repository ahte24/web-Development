import React, { useEffect } from "react";

const Navbar = ({ color }) => {
	useEffect(() => {
		alert("hey i will run on every render.");
	});

	useEffect(() => {
		alert("Hey welcome to my page. This is the first render.");
	}, []);

	useEffect(() => {
		alert("Hey i am running because Color was changed.");
	}, [color]);


    // Example of Cleanup function
    useEffect(() => {
		alert("Hey welcome to my page. This is the first render of app.jsx");
		return () => {
			alert("Component was unmounted.");
		};
	}, []);

	return <div>I am Navbar of {color} color hehehe...</div>;
};

export default Navbar;
