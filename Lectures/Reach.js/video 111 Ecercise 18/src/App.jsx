import { useState, useEffect } from "react";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts"
			);
			const result = await response.json();
			setData(result);
		} catch (error) {
			console.error("Error fetching data", error);
		}
	};

	return (
		<>
			<div className="flex min-h-screen gap-8 flex-wrap bg-slate-300 p-8">
				{data.map((item) => (
					<div
						key={item.id}
						className="flex items-center justify-center flex-col h-40 min-w-48 p-4 gap-10 bg-purple-300 rounded-lg"
					>
						<div>
							<h1
								className="text-xl text-center
              font-semibold"
							>
								{item.title}
							</h1>
							<p className="font-semibold">{item.body}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default App;
