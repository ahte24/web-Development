console.log("Hello i am conditional tutorial.");

let age = 0;

let grace = 10;

if (age - grace >= 18) {
	console.log("you can drive.");
} else if (age < 1) {
	console.log("are you kidding.");
} else {
	console.log("you cannot drive.");
}

console.log(age - grace);
console.log(age ** grace);
console.log(age % grace);

if ("3" === 3) console.log(true);
else console.log(false); // Returns false; becouse of === it also checks its datatypes and the value.

if ("3" == 3) console.log(true);
// Returns true; becouse of == it doesnt checks datatypes it only chekcs the value.
else console.log(false);

let a = 5;
let b = 9;
let c = a < b ? b - a : a - b;
console.log(c);

if (a < b) {
	let c = b - a;
	console.log(c);
} else {
	let c = a - b;
	console.log(c);
}
