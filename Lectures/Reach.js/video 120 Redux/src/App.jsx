/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
	decrement,
	increment,
	incrementByAmount,
	multiply,
} from "./redux/counter/counterSlice";

function App() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
	return (
		<>
			<Navbar />
			<div>
				<button onClick={() => dispatch(decrement())}>-</button>
				Currently count is {count}
				<button onClick={() => dispatch(increment())}>+</button>
				<button onClick={() => dispatch(incrementByAmount(5))}>+++++</button>
				<button onClick={() => dispatch(multiply())}>*</button>

			</div>
		</>
	);
}

export default App;
