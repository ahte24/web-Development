import fs from "fs/promises";

let a = await fs.readFile("ahte2.txt");
let b = await fs.writeFile("ahte.txt", "Welcome back! i am here again..");
let c = await fs.appendFile(
	"ahte.txt",
	"\nAhtesham will be the best in business insha allah"
);

console.log(a.toString());
console.log(b);
