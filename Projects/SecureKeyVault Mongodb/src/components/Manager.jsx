/* eslint-disable no-unused-vars */
import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
	const ref = useRef();
	const passwordRef = useRef();
	const [form, setForm] = useState({ site: "", username: "", password: "" });
	const [passwordArray, setPasswordArray] = useState([]);

	const getPassword = async () => {
		let req = await fetch("http://localhost:3000");
		let passwords = await req.json();
		setPasswordArray(passwords);
		console.log(passwords);
	};

	useEffect(() => {
		getPassword();
	}, []);

	const showPassword = () => {
		if (ref.current.src.includes("/icons/hidden.png")) {
			ref.current.src = "/icons/eye.png";
			passwordRef.current.type = "text";
		} else {
			ref.current.src = "/icons/hidden.png";
			passwordRef.current.type = "password";
		}
	};
	const savePassword = async () => {
		if (
			form.site.length > 4 &&
			form.username.length > 4 &&
			form.password.length > 4
		) {
			setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);

			await fetch("http://localhost:3000", {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ id: form.id }),
			});

			await fetch("http://localhost:3000", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ...form, id: uuidv4() }),
			});

			setForm({ site: "", username: "", password: "" });
			toast.success("Password saved successfully!", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
				// transition: "Bounce",
			});
		} else {
			toast.error("All fields must be filled correctly!", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
				// transition: "Bounce",
			});
		}
	};

	const deletePassword = async (id) => {
		if (confirm("Are you sure you want to delete this password?")) {
			const updatedPasswordArray = passwordArray.filter(
				(password) => password.id !== id
			);
			setPasswordArray(updatedPasswordArray);
			let res = await fetch("http://localhost:3000", {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ id }),
			});
			toast.success("Password deleted successfully!", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
		}
	};

	const editPassword = (id) => {
		console.log(id);
		setForm({ ...passwordArray.filter((edit) => edit.id === id)[0], id: id });
		const updatedPasswordArray = passwordArray.filter(
			(password) => password.id !== id
		);
		setPasswordArray(updatedPasswordArray);
	};

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const copyText = (text) => {
		toast.success("Copied to clipboard!", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
		});
		navigator.clipboard.writeText(text);
	};

	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				transition="Bounce"
			/>
			{/* Same as */}
			<ToastContainer />
			<div className="fixed inset-0 -z-10 bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
				<div className="fixed left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-300 opacity-20 blur-[100px]"></div>
				<div className="fixed left-0 right-0 top-96 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-300 opacity-20 blur-[100px]"></div>
			</div>
			<div className=" gap-4 items-center flex flex-col justify-center m-4">
				<a href="#" className=" text-2xl font-medium">
					<span className="text-green-600 ">&lt; </span>
					<span className="font-bold text-black">Secure</span>
					<span className="text-green-600 font-medium ">KeyVault /&gt;</span>
				</a>
				<p className=" text-xl font-semibold font-mono text-green-600">
					Your own password manager
				</p>
			</div>
			<div className="md:container p-6 mx-auto ">
				<div className="flex flex-col items-center justify-center gap-4 p-4 shadow-lg rounded-xl max-w-7xl mx-auto">
					<input
						autoFocus="ture"
						value={form.site}
						onChange={handleChange}
						name="site"
						type="text"
						placeholder="Website URL"
						className=" border-2 px-2 py-1 rounded-xl w-full ring-green-300 ring-1  outline-none"
					/>
					<div className="flex w-full flex-col md:flex-row relative gap-4 md:gap-8">
						<input
							value={form.username}
							onChange={handleChange}
							name="username"
							type="text"
							placeholder="Username/Email"
							className="border-2 w-full px-2 py-1 rounded-xl ring-green-300 ring-1  outline-none"
						/>

						<input
							ref={passwordRef}
							value={form.password}
							onChange={handleChange}
							name="password"
							type="password"
							placeholder="Password"
							className="border-2 px-2 py-1 w-full rounded-xl ring-green-300 ring-1  outline-none"
						/>
						<span
							className="cursor-pointer absolute right-3 bottom-[7px] "
							onClick={showPassword}
						>
							<img className="w-5" ref={ref} src="\icons\hidden.png" alt="" />
						</span>
					</div>
					<button
						onClick={savePassword}
						className="mt-2 w-44 font-semibold border-black border flex justify-center gap-3 items-center bg-green-600  p-1 rounded-xl hover:bg-green-600"
					>
						<lord-icon
							src="https://cdn.lordicon.com/jgnvfzqg.json"
							trigger="hover"
						></lord-icon>
						Save Password
					</button>
				</div>
				<div className="passwords max-w-7xl mx-auto mt-4">
					<h1 className="font-bold text-center text-2xl mt-4">
						Your Passwords
					</h1>
					{passwordArray.length === 0 && (
						<div className="text-center mt-6">No Passwords to show</div>
					)}
					{passwordArray.length != 0 && (
						<div className="overflow-x-auto relative shadow-lg  rounded-xl mt-4 max-w-7xl mx-auto">
							<table className="w-full text-sm text-left ">
								<thead className="text-xs uppercase text-black bg-green-600">
									<tr>
										<th scope="col" className="py-3  px-6">
											Site Name
										</th>
										<th scope="col" className="py-3 px-6">
											Username
										</th>
										<th scope="col" className="py-3 px-6">
											Password
										</th>
										<th
											scope="col"
											className="py-3 flex items-center justify-center px-6"
										>
											Actions
										</th>
									</tr>
								</thead>
								<tbody>
									{passwordArray.map((item, index) => {
										return (
											<tr key={index} className=" border-b ">
												<td
													scope="row"
													className="py-4 px-6 font-medium whitespace-nowrap"
												>
													<a
														href={item.site}
														target="_blank"
														rel="noopener noreferrer"
													>
														{item.site}
													</a>
												</td>
												<td className="py-4 px-6 font-medium whitespace-nowrap">
													{item.username}
													<button
														className="lordiconCopy"
														onClick={() => {
															copyText(item.username);
														}}
													>
														<lord-icon
															src="https://cdn.lordicon.com/iykgtsbt.json"
															trigger="hover"
															style={{
																width: "24px",
																height: "24px",
																padding: "7px",
															}}
														></lord-icon>
													</button>
												</td>
												<td className="py-4 px-6 font-medium whitespace-nowrap">
													{"*".repeat(item.password.length)}
													<button
														className="lordiconCopy"
														onClick={() => {
															copyText(item.password);
														}}
													>
														<lord-icon
															src="https://cdn.lordicon.com/iykgtsbt.json"
															trigger="hover"
															style={{
																width: "24px",
																height: "24px",
																padding: "7px",
															}}
														></lord-icon>
													</button>
												</td>
												<td className="py-4 px-6 font-medium whitespace-nowrap">
													<div className="flex justify-center gap-5  ">
														<button
															className="w-5"
															onClick={() => {
																editPassword(item.id);
															}}
														>
															<lord-icon
																src="https://cdn.lordicon.com/gwlusjdu.json"
																trigger="hover"
																style={{ width: "24px", height: "24px" }}
															></lord-icon>
														</button>
														<button
															className="w-5"
															onClick={() => {
																deletePassword(item.id);
															}}
														>
															<lord-icon
																src="https://cdn.lordicon.com/skkahier.json"
																trigger="hover"
																style={{ width: "24px", height: "24px" }}
															></lord-icon>
														</button>
													</div>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Manager;
