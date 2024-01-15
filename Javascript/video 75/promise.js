console.log("Promise file running here.");

let prom1 = new Promise((resolve, reject) => {
	let rand = Math.random();
	if (rand < 0.5) {
		reject("No the random number is not supporting.....");
	} else {
		setTimeout(() => {
			console.log("Yes i am done.");
			resolve("Ahtesham");
		}, 5000);
	}
});
let prom2 = new Promise((resolve, reject) => {
	let rand = Math.random();
	if (rand < 0.5) {
		reject("No the random number is not supporting.....(Second one.)");
	} else {
		setTimeout(() => {
			console.log("Yes i am done.(Second one.)");
			resolve("Ahtesham (Second one.)");
		}, 4000);
	}
});

let prom3 = new Promise((resolve, reject) => {
	let rand = Math.random();
	if (rand < 0.5) {
		reject("No the random number is not supporting.....(third one)");
	} else {
		setTimeout(() => {
			console.log("Yes i am done.(third one)");
			resolve("Ahtesham.(third one)");
		}, 3000);
	}
});
let prom4 = new Promise((resolve, reject) => {
	let rand = Math.random();
	if (rand < 0.5) {
		reject("No the random number is not supporting.....(forth one.)");
	} else {
		setTimeout(() => {
			console.log("Yes i am done.(forth one.)");
			resolve("Ahtesham (forth one.)");
		}, 2000);
	}
});
let prom5 = new Promise((resolve, reject) => {
	let rand = Math.random();
	if (rand < 0.5) {
		reject("No the random number is not supporting.....(fifth one.)");
	} else {
		setTimeout(() => {
			console.log("Yes i am done.(fifth one.)");
			resolve("Ahtesham (fifth one.)");
		}, 1000);
	}
});

// let p3 = Promise.allSettled([prom1, prom2, prom3, prom4, prom5]);
// let p3 = Promise.all([prom1, prom2, prom3, prom4, prom5]);
// let p3 = Promise.any([prom1, prom2, prom3, prom4, prom5]);
let p3 = Promise.resolve([prom1, prom2, prom3, prom4, prom5]);
// let p3 = Promise.reject([prom1, prom2, prom3, prom4, prom5]);
// let p3 = Promise.race([prom1, prom2, prom3, prom4, prom5]);

p3.then((e) => {
	console.log(e);
}).catch((e) => {
	console.log(e);
});
