/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
	const {
		register,
		handleSubmit,
		setError,
		watch,
		formState: { errors, isSubmitting },
	} = useForm();

	const delay = (del) => {
		return new Promise((res, rej) => {
			setTimeout(() => {
				res();
			}, del * 1000);
		});
	};
	const onSubmit = async (data) => {
		// await delay(1);
		let r = await fetch("http://localhost:3000/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		let res = await r.text();
		console.log(data, res);
		// if (data.username != "ahtesham_24") {
		// 	setError("myform", { message: "Invalid Credentials" });
		// }
	};

	return (
		<>
			{isSubmitting && <div>Loading......</div>}
			<div className="container">
				<form action="" onSubmit={handleSubmit(onSubmit)}>
					<input
						{...register("username", {
							required: {
								value: true,
								message: "This field cannot be empty!!",
							},
							minLength: { value: 4, message: "Min length is 4" },
							maxLength: { value: 12, message: "Max length is 12" },
						})}
						placeholder="username"
						type="text"
					/>
					{errors.username && (
						<div className="red">{errors.username.message}</div>
					)}

					{/* <br /> */}
					<input
						{...register("password", {
							required: { value: true, message: "password cannot be empty" },
							minLength: { value: 8, message: "Min length is 8" },
							maxLength: { value: 16, message: "Max length is 16" },
						})}
						placeholder="password"
						type="password"
					/>
					{errors.password && (
						<div className="red">{errors.password.message}</div>
					)}
					<br />
					<input disabled={isSubmitting} type="submit" value="Submit" />
					{errors.myform && <div className="red">{errors.myform.message}</div>}
				</form>
			</div>
		</>
	);
}

export default App;
