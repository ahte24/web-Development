export default function Page({ params }) {
	let languages = ["Python", "Javascript", "Java", "Cpp", "C#"];
	if (languages.includes(params.slug)) {
		return <div>My Post: {params.slug}</div>;
	} else {
		return <div>Page Not Found</div>;
	}
}
