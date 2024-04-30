"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
	const { data: session } = useSession();
	const [showdropdown, setShowdropdown] = useState(false);

	return (
		<nav className="bg-gray-900 text-white flex md:justify-between gap-3 justify-center items-center p-2 md:px-8 md:h-[9vh]   flex-col md:flex-row">
			<Link href="/" className="logo font-bold flex items-center text-3xl ">
				Cup & Companion!
				<span className="flex items-center">
					<img src="./coffee.gif" width={35} alt="" />
				</span>
			</Link>
			<div className="flex gap-5 items-center">
				{session && (
					<>
						<button
							id="dropdownInformationButton"
							onBlur={() => {
								setTimeout(() => {
									setShowdropdown(false);
								}, 300);
							}}
							onClick={() => {
								setShowdropdown(!showdropdown);
							}}
							data-dropdown-toggle="dropdownInformation"
							className="relative md:h-14 h-10 inline-flex overflow-hidden rounded-lg p-[1px] disabled:ring-0 focus:outline-none focus:ring-2  focus:ring-offset-slate-50 "
							type="button"
						>
							<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
							<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
								<img
									className="w-10 rounded-full mr-2 hidden md:block"
									src={session.user.image}
									alt=""
								/>
								{session.user.email}
								<svg
									className="w-2.5 h-2.5 ms-3"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 10 6"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="m1 1 4 4 4-4"
									/>
								</svg>
							</span>
						</button>

						<div
							id="dropdownInformation"
							className={`z-10 ${
								showdropdown ? "" : "hidden"
							} transition-all  bg-white divide-y absolute right-[32px] top-16 divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
						>
							<ul
								className="py-2 text-sm text-gray-700 dark:text-gray-200"
								aria-labelledby="dropdownInformationButton"
							>
								<li>
									<Link
										href="/dashboard"
										className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>
										Dashboard
									</Link>
								</li>
								<li>
									<Link
										href={`/${session.user.name}`}
										className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>
										Your page
									</Link>
								</li>
							</ul>
							<div
								className="py-2"
								onClick={() => {
									signOut();
								}}
							>
								<Link
									href="/"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
								>
									Sign out
								</Link>
							</div>
						</div>
					</>
				)}
				{!session && (
					<Link href={"/signin"}>
						<button className="relative inline-flex h-9 w-24 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-offset-slate-50">
							<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
							<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-md font-medium text-white backdrop-blur-3xl">
								Login
							</span>
						</button>
					</Link>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
