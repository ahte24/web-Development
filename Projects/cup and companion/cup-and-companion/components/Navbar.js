"use client";
import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
	const { data: session } = useSession();
	if (session) {
		return (
			<>
				Signed in as {session.user.email} <br />
				<button onClick={() => signOut()}>Sign out</button>
			</>
		);
	}
	return (
		<nav className="bg-gray-950 text-white flex justify-between px-8 h-[7vh] items-center">
			<div className="logo font-bold flex items-center">
				Cup & Companion!
				<span className="flex items-center">
					<img src="./coffee.gif" width={35} alt="" />
				</span>
			</div>
			<div>
				<Link href={"/signin"}>
					<button className="relative inline-flex h-9 w-24 overflow-hidden rounded-lg p-[1px] focus:outline-none ">
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-md font-medium text-white backdrop-blur-3xl">
							Login
						</span>
					</button>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
