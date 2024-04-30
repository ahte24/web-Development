"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const scrollToBottom = () => {
		// Scroll to the bottom of the page
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: "smooth", // Add smooth scrolling effect
		});
	};
	return (
		<>
			<div className="flex justify-center flex-col gap-5 items-center text-white h-[35vh] md:w-full  mx-auto w-[80vw]">
				<div className="font-bold md:text-5xl text-2xl flex gap-2 items-center">
					Cup & Companion{" "}
					<span>
						<img src="./coffee.gif" className="md:w-16 w-10" alt="" />
					</span>
				</div>
				<p className="text-center">
					Connect & Create! Fund dream projects & find coffee (or tea!)
					companions. Cup & Companion: Your creative fueling ground.
				</p>
				<div className="flex gap-5">
					<Link
						href="/signin"
						className="relative inline-flex h-11 w-28 overflow-hidden rounded-lg p-[1px]"
					>
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
							Start Here
						</span>
					</Link>
					<button
						onClick={scrollToBottom}
						className="relative inline-flex h-11 w-28 overflow-hidden rounded-lg p-[1px] "
					>
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
							Read More
						</span>
					</button>
				</div>
			</div>
			<div className="bg-gray-300 h-[2px] opacity-15"></div>
			<div className="text-white lg:container mx-auto py-16 px-6">
				<div>
					<h1 className="md:text-2xl fontbold text-center mb-10 ">
						Fueling the Future: Empowering the Coffee Community through
						Crowdfunding
					</h1>
				</div>
				<div className="flex gap-8 justify-between lg:flex-row  flex-col items-center">
					<div className="relative h-80 lg:w-[40vw] w-[90vw] overflow-hidden rounded-xl border border-slate-800 p-[1px] backdrop-blur-3xl">
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<div className="inline-flex h-full w-full  items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
							<div className="item space-y-3 flex-col  p-2 items-center flex w-96">
								<img
									className="bg-slate-400 w-36  h-36 rounded-full  text-black object-fill"
									src="./man.gif"
									alt=""
								/>
								<p className="font-bold text-center">
									Fuel Your Dreams: Get Funded Here!
								</p>
								<p className="text-center">
									Find support for your creative projects and turn your ideas
									into reality.
								</p>
							</div>
						</div>
					</div>
					<div className="relative h-80 lg:w-[40vw] w-[90vw] overflow-hidden rounded-xl border border-slate-800 p-[1px] backdrop-blur-3xl">
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
							<div className="item space-y-3 flex-col p-5 items-center flex w-96">
								<img
									className="bg-slate-400 w-36  h-36 rounded-full  text-black object-fill"
									src="./coin.gif"
									alt=""
								/>
								<p className="font-bold text-center">
									Watch Your Ideas Bloom: Get Funded Here!
								</p>
								<p className="text-center">
									Fuel your creative projects with global backers & easy,
									instant payouts. Let your dreams take root!
								</p>
							</div>
						</div>
					</div>
					<div className="relative h-80 lg:w-[40vw] w-[90vw] overflow-hidden rounded-xl border border-slate-800 p-[1px] backdrop-blur-3xl">
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
							<div className="item space-y-3 flex-col p-5 items-center flex w-96">
								<img
									className="bg-slate-400 w-36  h-36 rounded-full  text-black object-fill"
									src="./comm.gif"
									alt=""
								/>
								<p className="font-bold text-center">
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
			<div className="text-white lg:container mx-auto py-16 px-6">
				<h1 className="text-2xl fontbold text-center mb-10">
					Learn more about us
				</h1>
				<div className="flex gap-8 justify-between lg:flex-row  flex-col items-center">
					<div className="relative h-80 lg:w-[40vw] w-[90vw] overflow-hidden rounded-xl border border-slate-800 p-[1px] backdrop-blur-3xl">
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
							<div className="item space-y-3 flex-col items-center flex w-96">
								<img
									className="bg-slate-400 w-36  h-36 rounded-full  text-black object-fill"
									src="https://media.licdn.com/dms/image/D4D03AQEMecHV82cOsg/profile-displayphoto-shrink_800_800/0/1693602634724?e=1720051200&v=beta&t=Poo9QPxR5mCU8sJImC4XOsIMEqzDpSsx1tjgR353l_Q"
									alt=""
								/>
								<h1 className="font-bold text-center">Developer</h1>
								<p className="font-bold text-center">
									Mohammed Ahteshamuz Zaman
								</p>
								<p className="text-center">
									Next.js/Node.js Dev. Building user-friendly experiences &
									fostering communities.
								</p>
							</div>
						</div>
					</div>
					<div className="relative h-80 lg:w-[40vw] w-[90vw] overflow-hidden rounded-xl border border-slate-800 p-[1px] backdrop-blur-3xl">
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
							<div className="item space-y-3 flex-col items-center flex w-96">
								<img
									className="bg-slate-400 w-36  h-36 rounded-full  text-black object-fill"
									src="./bulb.gif"
									alt=""
								/>
								<p className="font-bold text-center">
									Motivations Behind This Website
								</p>
								<p className="text-center">
									I've crafted a site displaying my skills in modern web dev
									with Next.js and Node.js. It showcases user-friendly
									experiences, letting me demonstrate my abilities.
								</p>
							</div>
						</div>
					</div>
					<div className="relative h-80 lg:w-[40vw] w-[90vw] overflow-hidden rounded-xl border border-slate-800 p-[1px] backdrop-blur-3xl">
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
						<div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
							<div className="item space-y-3 flex-col items-center flex w-96">
								<img
									className="bg-slate-400 w-36  h-36 rounded-full  text-black object-fill"
									src="./learn.jpg"
									alt=""
								/>
								<p className="font-bold text-center">
									Always Learning & Growing
								</p>
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
