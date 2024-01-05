(async function main() {
	// let a = await sleep();
	// console.log(a);
	// let b = await sleep();
	// console.log(b);

	// let [x, y, ...rest] = [4, 5, 2, 3, 6, 7, 8, 9];
	// console.log("x: " + x, "y: " + y, "rest: "+rest);

	let obj = {
		a: 99,
		b: 55,
		c: 3,
	};
	let { a, b } = obj;
	console.log(a, b);
	let arr = [3, 4, 5, 6, 7, 8, 9];
	console.log(sum(...arr)); // Work exactly the same...
	console.log(sum(3, 4, 5, 6, 7, 8, 9)); // Work exactly the same...

	let a1 = "The";
	let b2 = "No";
	let c = { a, b };
	console.log(a);
	console.log(b);
	console.log(c);
	// -------------------------------------------Hoisting-----------------------------------------------------//
	console.log(az);
	var az = 65;
})();

const sleep = async () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(455);
		}, 1000);
	});
};

const sum = async (a, b, c, d, e, f, g) => {
	return a + b + c + d + e + f + g;
};
