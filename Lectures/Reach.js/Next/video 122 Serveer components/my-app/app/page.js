// "use client";
import fs from "fs/promises";
import Navbar from "@/components/Navbar";
// import { useState, useEffect } from "react";

export default function Home() {
	// const [count, setCount] = useState(0);
	console.log("Hello world i am mohammed ahteshamuz zaman");
	let a = fs.readFile(".gitignore");
	a.then((e) => {
		console.log(e.toString());
	});
	return (
		<div>
			<Navbar/>
			I am a component
			{/* {count} */}
			{/* <button
				className="p-2 bg-slate-400"
				onClick={() => {
					setCount(count + 1);
				}}
			>
				click me
			</button> */}
		</div>
	);
}
