/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	// const [Name, setName] = useState("");
	const [form, setform] = useState({
		email: "",
		phone: "",
	});
	const handleClick = () => {
		alert("Click Me button was triggred");
	};

	const handleMouseOver = () => {
		alert("No boy dont you dare to click...");
	};

	const handleChange = (e) => {
		setform({ ...form, [e.target.name]: e.target.value });
		console.log(form);
	};

	return (
		<>
			<div className="button">
				<button onClick={handleClick}> Click Me</button>
			</div>
			{/* <div className="red" onMouseOver={handleMouseOver}>
				I am a red div
			</div> */}
			<input
				type="text"
				name="email"
				value={form.email}
				onChange={handleChange}
			/>
			<input
				type="text"
				name="phone"
				value={form.phone}
				onChange={handleChange}
			/>
		</>
	);
}

export default App;
