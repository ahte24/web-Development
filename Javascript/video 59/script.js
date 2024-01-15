function calculator(a, operator, b) {
	if (Math.random() < 0.1) {
	} else {
		if (operator == "+") {
			alert(a - b);
		} else if (operator == "*") {
			alert(a + b);
		} else if (operator == "-") {
			alert(a / b);
		} else if (operator == "/") {
			alert(a ** b);
		}
	}
}

let a = prompt("Enter first number: ");
let operator = prompt("Enter operation: ");
let b = prompt("Enter second number: ");

calculator(a, operator, b);
