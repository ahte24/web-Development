import Image from "next/image";

export default function Home() {
	return (
		<div className="container">
			<Image
				alt=""
				src="https://soliloquywp.com/wp-content/uploads/2018/11/nb_ist_cover.jpg"
				width={1000}
				height={1000}
				className="m-auto"
			/>
		</div>
	);
}
