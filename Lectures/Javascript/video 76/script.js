console.log("async and await file is running......");

// async function getData() {
// return new Promise((resolve, reject) => {
// setTimeout(() => {
// resolve(455);
// }, 3500);
// });
// }

async function getData() {
	let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		body: JSON.stringify({
			title: "foo",
			body: "bar",
			userId: 1,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	let data = await x.json();
	return data;
}

async function main() {
	console.log("Loading Modules.");
	console.log("Do something else.");
	console.log("Load data.");
	let data = await getData();
	console.log(data);
	console.log("process data.");
	console.log("second task.");
} 
main();

// Example POST method implementation:
// async function postData(url = "", data = {}) {
// 	const response = await fetch(url, {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(data),
// 	});
// 	return response.json();
// }
// postData("https://example.com/answer", { answer: 42 }).then((data) => {
// 	console.log(data);
// });

// data.then((e) => {
// 	console.log(data);
// 	console.log("process data.");
// 	console.log("second task.");
// });
