let students = [
	"Shubh",
	"Anjali",
	"Shivani",
	"Shivangi",
	"Annapurna",
	"Shubham",
	"Keshav Krishna",
	"Ravindranathan",
	"Shivesh",
	"Kaif",
	"Emanuel",
	"Ahtesham",
];

let houses = [];

for (const stud of students) {
	if (stud.length < 6) {
		houses.push("Shashtree");
	} else if (stud.length < 8) {
		houses.push("Nehru");
	} else if (stud.length < 12) {
		houses.push("Subhash");
	} else {
		houses.push("Gandhi");
	}
}

console.log(students);
console.log(houses);
