console.log("Classes and Objects file is running......");

// let obj = {
// 	a: 1,
// 	b: "Ahtesham",
// };

// console.log(obj);

// let animal = {
// 	eats: true,
// };

// let rabbit = {
// 	jumps: true,
// };

// rabbit.__proto__ = animal;

// console.log(rabbit);

class Animal {
	constructor(name) {
		this.name = name;
		console.log("Object is created...");
	}
	eats() {
		console.log("Kha rha hun....");
	}
	jump() {
		console.log("kood rha hun...");
	}
}

let a = new Animal("Bunny");
console.log(a);

class Lion extends Animal {
	constructor(name) {
		super(name);
		console.log("Object is created and it is a sheera constructor");
	}
    eats(){
        super.eats();
        console.log("Eating bro...")
    }
}
let b = new Lion("Sherra");
console.log(b);
