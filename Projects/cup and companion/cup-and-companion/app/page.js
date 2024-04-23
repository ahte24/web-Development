import Image from "next/image";

export default function Home() {
	return (
		<>
			<div className="flex justify-center flex-col gap-5 items-center text-white h-[35vh]">
				<div className="font-bold text-5xl flex gap-2 items-center">
					Cup & Companion{" "}
					<span>
						<img src="./coffee.gif" width={50} alt="" />
					</span>
				</div>
				<p>
					Connect & Create! Fund dream projects & find coffee (or tea!)
					companions. Cup & Companion: Your creative fueling ground.
				</p>
				<div className="flex gap-5">
					<button className="relative inline-flex h-11 w-28 overflow-hidden rounded-lg p-[1px]">
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
							Start Here
						</span>
					</button>
					<button className="relative inline-flex h-11 w-28 overflow-hidden rounded-lg p-[1px] ">
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
							Read More
						</span>
					</button>
				</div>
			</div>
			<div className="bg-gray-300 h-[2px] opacity-15"></div>
			<div className="text-white container mx-auto py-16">
				<h1 className="text-2xl fontbold text-center mb-10">
					Fueling the Future: Empowering the Coffee Community through
					Crowdfunding
				</h1>
				<div className="flex gap-5 justify-between ">
					<div className="relative h-72 w-96 overflow-hidden rounded-xl border border-slate-800 p-[1px] backdrop-blur-3xl">
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
							<div className="item space-y-3 flex-col items-center flex w-80">
								<img
									className="bg-slate-400 w-36  h-36 rounded-full  text-black object-fill"
									src="./man.gif"
									alt=""
								/>
								<p className="font-bold">Fuel Your Dreams: Get Funded Here!</p>
								<p className="text-center">
									Find support for your creative projects and turn your ideas
									into reality.
								</p>
							</div>
						</div>
					</div>
					<div className="relative h-72 w-96 overflow-hidden rounded-xl border border-slate-800 p-[1px] backdrop-blur-3xl">
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
							<div className="item space-y-3 flex-col items-center flex w-80">
								<img
									className="bg-slate-400 w-36  h-36 rounded-full  text-black object-fill"
									src="./coin.gif"
									alt=""
								/>
								<p className="font-bold">
									Watch Your Ideas Bloom: Get Funded Here!
								</p>
								<p className="text-center">
									Fuel your creative projects with global backers & easy,
									instant payouts. Let your dreams take root!
								</p>
							</div>
						</div>
					</div>
					<div className="relative h-72 w-96 overflow-hidden rounded-xl border border-slate-800 p-[1px] backdrop-blur-3xl">
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
							<div className="item space-y-3 flex-col items-center flex w-80">
								<img
									className="bg-slate-400 w-36  h-36 rounded-full  text-black object-fill"
									src="./comm.gif"
									alt=""
								/>
								<p className="font-bold">
									Connect & Create: Find Your Tribe Here!
								</p>
								<p className="text-center">
									Fuel your passion with a supportive community. Share ideas,
									get feedback, and watch your dreams take flight.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-gray-300 h-[2px] opacity-15"></div>
			<div className="text-white container mx-auto py-16">
				<h1 className="text-2xl fontbold text-center mb-10">
					Learn more about us
				</h1>
				<div className="flex gap-5 justify-between ">
					<div className="relative h-72 w-96 overflow-hidden rounded-xl border border-slate-800 p-[1px] backdrop-blur-3xl">
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
							<div className="item space-y-3 flex-col items-center flex w-80">
								<img
									className="bg-slate-400 w-36  h-36 rounded-full  text-black object-fill"
									src="./az.jpg"
									alt=""
								/>
								<h1 className="font-bold">Developer</h1>
								<p className="font-bold">Mohammed Ahteshamuz Zaman</p>
								<p className="text-center">
									Next.js/Node.js Dev. Building user-friendly experiences &
									fostering communities.
								</p>
							</div>
						</div>
					</div>
					<div className="relative h-72 w-96 overflow-hidden rounded-xl border border-slate-800 p-[1px] backdrop-blur-3xl">
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
							<div className="item space-y-3 flex-col items-center flex w-80">
								<img
									className="bg-slate-400 w-36  h-36 rounded-full  text-black object-fill"
									src="./bulb.gif"
									alt=""
								/>
								<p className="font-bold">Motivations Behind This Website</p>
								<p className="text-center">
									I've crafted a site displaying my skills in modern web dev
									with Next.js and Node.js. It showcases user-friendly
									experiences, letting me demonstrate my abilities.
								</p>
							</div>
						</div>
					</div>
					<div className="relative h-72 w-96 overflow-hidden rounded-xl border border-slate-800 p-[1px] backdrop-blur-3xl">
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
							<div className="item space-y-3 flex-col items-center flex w-80">
								<img
									className="bg-slate-400 w-36  h-36 rounded-full  text-black object-fill"
									src="./learn.jpg"
									alt=""
								/>
								<p className="font-bold">Always Learning & Growing</p>
								<p className="text-center">
									The world of web development is constantly evolving, and I'm
									always eager to learn
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
