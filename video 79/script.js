console.log("Try, catch and error handling file is running");

let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");

if (isNaN(a) || isNaN(b)) {
	throw SyntaxError("Sorry this entry is not allowed....");
}

let sum = parseInt(a) + parseInt(b);

function main() {
	try {
		console.log(`The sum is: ${sum}`);
		return true;
	} catch (error) {
		// alert(error.name);
		// alert(error.message);
		// alert(error.stack);
		console.log(error.stack);
		return false;
	} finally {
		console.log("Files are being closed and db connection is being closed.");
	}
}

main();
