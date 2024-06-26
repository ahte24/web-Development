const Footer = () => {
	return (
		<footer className="bg-gradient-to-r from-slate-800 to-slate-900 flex flex-wrap items-center justify-between w-full text-white p-2 lg:px-8 text-center lg:p-2">
			<div className="flex items-center justify-center w-full lg:w-auto">
				<a
					href="#"
					className="flex items-center text-3xl font-bold hover:text-green-500 transition-colors"
				>
					<span className="text-green-500 mr-2">&lt;</span>
					Secure<span className="text-green-500 font-light">KeyVault</span>
					<span className="text-green-500 ml-2">/&gt;</span>
				</a>
			</div>
			<div className="w-full lg:w-auto mt-4 md:mt-0">
				<p className="text-lg font-semibold">
					&copy; {new Date().getFullYear()} SecureKeyVault. All rights reserved.
				</p>
				<p className="text-sm mt-2">
					Crafted with <span className="text-red-500">❤️</span> by the
					SecureKeyVault team.
				</p>
			</div>
			<div className="w-full lg:w-auto mt-4 lg:mt-0 flex items-center justify-center">
				<a
					href="https://github.com/ahte24"
					target="_blank"
					className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2  focus:ring-offset-slate-50"
				>
					<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
					<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-2 py-1 text-sm font-medium text-white backdrop-blur-3xl">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 mr-2 "
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.838c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.337-.012 2.415-.012 2.743 0 .267.18.578.688.481A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
							/>
						</svg>
						Visit our GitHub
					</span>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
