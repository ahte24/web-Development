console.log("hey this is tutorial 2 of js");

let a = 5;
let b = 10;
let c = "Ahtesham";
{
	let b = 5434;
	console.log(b);
}

console.log(b);
// console.log(a + b);
// console.log(typeof a, typeof b, typeof c);

// let a1 = 4;
// a1 += 2; //can be done.

// const a2 = 3;
// a2 += 3; // Cannot be done becouse the a2 is using const data type. throws an error.

// console.log(a1);

let x = "Harry bhai ";
let y = 33;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;
console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

let des = {
	name: "Mohammed",
	"job rold": "SDE",
	"job code": 5433,
    "is handsome": true,
};

console.log(des);
console.log(typeof des);
des.salary = "3.44 lakh";
console.log(des);
des.salary = "1 crore";
console.log(des);
des.salary = "100 crore";
console.log(des);
