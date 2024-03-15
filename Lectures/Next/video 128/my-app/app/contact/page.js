import React from "react";

const page = () => {
	return <div>Hello i am contact page</div>;
};

export default page;

export async function generateMetadata({ params }) {
	console.log(params);
	return {
		title: "Contact Us",
	};
}
