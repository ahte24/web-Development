"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { updateProfile, fetchuser } from "@/actions/useractions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";

const Dashboard = () => {
	const [form, setform] = useState({});
	const { data: session, update } = useSession();
	const router = useRouter();

	// Redirect if no session exists
	useEffect(() => {
		getData();
		if (!session) {
			router.push("/signin");
		}
	}, [session, router]);

	const getData = async () => {
		// Ensure that session and session.user are defined
		if (!session || !session.user) {
			return; // Exit the function if no session or user info is available
		}

		try {
			let u = await fetchuser(session.user.name); // Assuming fetchuser returns a promise
			setform(u);
		} catch (error) {
			console.error("Failed to fetch user:", error);
		}
	};

	if (!session) {
		return null;
	}

	const handleChange = (e) => {
		setform({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		update();
		let a = await updateProfile(e, session.user.name);
		toast.success("Profile Updated!", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			transition: Bounce,
		});
	};

	return (
		<div>
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
			<div className="h-[83vh] flex flex-col justify-center items-center md:container mx-auto">
				<h1 className="md:text-3xl text-2xl mt-14 md:mt-0  font-bold text-center">
					Welcome to your Dashboard
				</h1>
				<form
					className="lg:w-3/6 w-[100vw] flex flex-col gap-4 px-10"
					action={handleSubmit}
				>
					<div className="flex flex-col gap-1">
						<div className="text-sm">Name: </div>
						<input
							value={form.name ? form.name : ""}
							name="name"
							id="name"
							onChange={handleChange}
							type="text"
							className="w-full rounded-md bg-slate-700 p-1 px-2 outline-none"
							placeholder="Name"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<div className="text-sm">Email: </div>
						<input
							value={form.email ? form.email : ""}
							name="email"
							id="email"
							onChange={handleChange}
							type="text"
							className="w-full rounded-md bg-slate-700 p-1 px-2 outline-none"
							placeholder="Email"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<div className="text-sm">Username: </div>
						<input
							value={form.username ? form.username : ""}
							name="username"
							id="username"
							onChange={handleChange}
							type="text"
							className="w-full rounded-md bg-slate-700 p-1 px-2 outline-none"
							placeholder="Username"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<div className="text-sm">Profile Picture: </div>
						<input
							value={form.profilepic ? form.profilepic : ""}
							name="profilepic"
							id="profilepic"
							onChange={handleChange}
							type="text"
							className="w-full rounded-md bg-slate-700 p-1 px-2 outline-none"
							placeholder="Profile Picture URL"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<div className="text-sm">Cover Picture: </div>
						<input
							value={form.coverpicture ? form.coverpicture : ""}
							name="coverpicture"
							id="coverpicture"
							onChange={handleChange}
							type="text"
							className="w-full rounded-md bg-slate-700 p-1 px-2 outline-none"
							placeholder="Cover Picture URL"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<div className="text-sm">Razorpay ID: </div>
						<input
							value={form.razorpayId ? form.razorpayId : ""}
							name="razorpayId"
							id="razorpayId"
							onChange={handleChange}
							type="password"
							className="w-full rounded-md bg-slate-700 p-1 px-2 outline-none"
							placeholder="Razorpay ID"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<div className="text-sm">Razorpay Secret: </div>
						<input
							value={form.razorpaySecret ? form.razorpaySecret : ""}
							name="razorpaySecret"
							id="razorpaySecret"
							onChange={handleChange}
							type="password"
							className="w-full rounded-md bg-slate-700 p-1 px-2 outline-none"
							placeholder="Razorpay Secret"
						/>
					</div>
					<button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-offset-slate-50">
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
							Click Me
						</span>
					</button>
				</form>
			</div>
		</div>
	);
};

export default Dashboard;
