"use client";
import { useRef } from "react";
import { submitAction } from "@/actions/form";

export default function Home() {
	let ref = useRef();
	return (
		<div className="container mx-auto flex justify-center my-52">
			<form ref={ref} action={(e) => {submitAction(e), ref.current.reset()}} className="flex flex-col gap-5">
				<div>
					<label htmlFor="name">Name:</label>
					<input
						name="name"
						id="name"
						type="text"
						className="text-black mx-8"
					/>
				</div>
				<div>
					<label htmlFor="add">Address:</label>
					<input name="add" id="add" type="text" className="text-black mx-4" />
				</div>
				<div className="flex justify-center">
					<button className="bg-gray-700 rounded-md p-2">Submit</button>
				</div>
			</form>
		</div>
	);
}
