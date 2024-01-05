console.log("Getters and setters file is running.....");

class User {
	constructor(name) {
		this.name = name;
	}
	get name() {
		return this._name;
	}

	set name(value) {
		if (value.length <= 4) {
			console.log("Name is too sort....");
			return;
		}
		this._name = value;
	}
}

let user = new User("Zaman");
console.log(user.name);

// user.name = "hel";
user = new User("Ahtesham");
console.log(user.name);
console.log(user);
