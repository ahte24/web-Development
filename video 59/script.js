function calculator(a, operator, b) {
	if (Math.random() < 0.1) {
		// Generate a random wrong answer
		console.log(Math.floor(Math.random() * 1000));
	} else {
		if (operator == "+") {
			console.log(a - b);
		} else if (operator == "*") {
			console.log(a + b);
		} else if (operator == "-") {
			console.log(a / b);
		} else if (operator == "/") {
			console.log(a ** b);
		}
	}
}

calculator(10, "+", 5);
calculator(10, "*", 5);
calculator(10, "-", 5);
calculator(10, "/", 5);
