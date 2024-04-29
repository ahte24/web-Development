"use client";
import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
	const { data: session } = useSession();
	const router = useRouter();

	// Redirect if no session exists
	useEffect(() => {
		if (!session) {
			router.push("/");
		}
	}, [session, router]);

	if (!session) {
		return null;
	}

	return (
		<div>
			<div className="h-[85vh] flex flex-col justify-center items-center container mx-auto">
				<h1 className="text-3xl font-bold">Welcome to your Dashboard</h1>
				<div className="w-2/5 flex flex-col gap-2 px-10">
					<div className="flex flex-col gap-1">
						<div className="text-sm">Name: </div>
						<input
							type="text"
							className="w-full rounded-md bg-slate-700 p-1 px-2 outline-none"
							placeholder="Name"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<div className="text-sm">Email: </div>
						<input
							type="text"
							className="w-full rounded-md bg-slate-700 p-1 px-2 outline-none"
							placeholder="Email"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<div className="text-sm">Username: </div>
						<input
							type="text"
							className="w-full rounded-md bg-slate-700 p-1 px-2 outline-none"
							placeholder="Username"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<div className="text-sm">Profile Picture: </div>
						<input
							type="text"
							className="w-full rounded-md bg-slate-700 p-1 px-2 outline-none"
							placeholder="Profile Picture URL"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<div className="text-sm">Cover Picture: </div>
						<input
							type="text"
							className="w-full rounded-md bg-slate-700 p-1 px-2 outline-none"
							placeholder="Cover Picture URL"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<div className="text-sm">Razorpay ID: </div>
						<input
							type="text"
							className="w-full rounded-md bg-slate-700 p-1 px-2 outline-none"
							placeholder="Razorpay ID"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<div className="text-sm">Razorpay Secret: </div>
						<input
							type="text"
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
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
