console.log("Ahtesham is a hacker......");
console.log("hello world..............u");

// setTimeout((e) => {
// console.log("Hey i am timeout function.");
// }, 0);
// setTimeout((e) => {
// console.log("Hey i am timeout function (The second one).");
// }, 0);

console.log("The End.");

const fn = () => {
	console.log("Hello world");
};

const callback = (args) => {
	console.log(args);
	fn();
};

const loadScript = (src, callback) => {
	let sc = document.createElement("script");
	sc.src = src;
	sc.onload = callback("MAZ", fn);
	document.head.append(sc);
};

loadScript(
	"https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
	callback
);
