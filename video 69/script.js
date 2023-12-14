let a = 6;

function Factorial(number) {
	let arr = Array.from(Array(number + 1).keys());
	let c = arr.slice(1).reduce((a, b) => {
		return a * b;
	});
	return c;
}

function ForFac(number) {
	let facto = 1;
	for (let i = 1; i <= number; i++) {
		facto *= i;
	}
	return facto;
}

console.log(Factorial(a));
console.log(ForFac(a));
