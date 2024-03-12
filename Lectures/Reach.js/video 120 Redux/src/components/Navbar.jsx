import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
	const count = useSelector((state) => state.counter.value);
	return <div>Here i am navbar! {count}</div>;
};
export default Navbar;
