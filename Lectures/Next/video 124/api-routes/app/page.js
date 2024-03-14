"use client";
import { data } from "autoprefixer";
import Image from "next/image";

export default function Home() {
	const handleClick = async () => {
		let data = {
			name: "Zaman",
			role: "coder",
		};
		let a = await fetch("/api/add", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(data),
		});
		let res = await a.json();
		console.log(res);
	};
	return (
		<div>
			<h1 className="text-xl font-bold text-center">Next.js Api routes demo</h1>
			<button onClick={handleClick}>Click me</button>
		</div>
	);
}
