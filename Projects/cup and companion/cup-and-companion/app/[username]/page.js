import React from "react";

const Username = ({ params }) => {
	return (
		<>
			<div className="cover w-full h-96 relative">
				<img className="w-full h-96 object-cover " src="./banner.png" />
				<div className="flex justify-center  absolute left-[45.5%] border-2 rounded-full border-slate-400 -bottom-20">
					<img
						src="./az.jpg"
						width={150}
						height={150}
						className=" rounded-full"
						alt=""
					/>
				</div>
			</div>
			<div className="info flex-col flex justify-center items-center mt-28 ">
				<div className="font-semibold text-lg">@{params.username}</div>
				<div className="text-gray-400 text-sm">
					creating animated art for vtt's
				</div>
				<div className="text-gray-400 text-sm">
					9,719 members . 82 posts . $15,450/release
				</div>
				<div className="payments flex p-10 w-[80%] mx-auto gap-10 justify-center">
					<div className="contributers bg-slate-900 rounded-lg p-5 w-1/2 min-h-72">
						{/* show list of all the contributers as a leaderboard */}
						<h2 className=" text-center font-bold text-lg mb-3">
							Contributor's
						</h2>
						<ul className="text-sm flex gap-3 flex-col overflow-y-auto h-80">
							<li className="flex items-center my2 gap-3 border border-slate-600 p-2 rounded-lg">
								<img width={20} src="./avatar.gif" alt="" />
								<span>
									Arshad donated <span className="font-bold">$30</span> with a
									message "I support you bro lots of ❤️"
								</span>
							</li>
							<li className="flex items-center my2 gap-3 border border-slate-600 p-2 rounded-lg">
								<img width={20} src="./avatar.gif" alt="" />
								<span>
									Arshad donated <span className="font-bold">$30</span> with a
									message "I support you bro lots of ❤️"
								</span>
							</li>
							<li className="flex items-center my2 gap-3 border border-slate-600 p-2 rounded-lg">
								<img width={20} src="./avatar.gif" alt="" />
								<span>
									Arshad donated <span className="font-bold">$30</span> with a
									message "I support you bro lots of ❤️"
								</span>
							</li>
							<li className="flex items-center my2 gap-3 border border-slate-600 p-2 rounded-lg">
								<img width={20} src="./avatar.gif" alt="" />
								<span>
									Arshad donated <span className="font-bold">$30</span> with a
									message "I support you bro lots of ❤️"
								</span>
							</li>
						</ul>
					</div>
					<div className="makePayments bg-slate-900 rounded-lg p-5 w-1/2 min-h-72">
						<h2 className=" text-center font-bold text-lg my-5">
							Make Payments
						</h2>
						<div className="flex flex-col gap-3">
							<input
								type="text"
								className="w-full p-3 rounded-lg bg-slate-800"
								placeholder="Enter Name"
							/>
							<input
								type="text"
								className="w-full p-3 rounded-lg bg-slate-800"
								placeholder="Enter Message"
							/>
							<input
								type="text"
								className="w-full p-3 rounded-lg bg-slate-800"
								placeholder="Enter Amount"
							/>
							<div className="flex justify-center">
								<button class="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-offset-slate-50">
									<span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
									<span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-md font-medium text-white backdrop-blur-3xl">
										Pay
									</span>
								</button>
							</div>
							<div className="flex gap-2 ">
								<button class="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2  focus:ring-offset-slate-50">
									<span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
									<span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
										Pay ₹500
									</span>
								</button>
								<button class="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2  focus:ring-offset-slate-50">
									<span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
									<span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
										Pay ₹1000
									</span>
								</button>
								<button class="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2  focus:ring-offset-slate-50">
									<span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
									<span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
										Pay ₹1500
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Username;
