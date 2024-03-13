/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "soliloquywp.com",
				port: "",
			},
		],
	},
};

export default nextConfig;
