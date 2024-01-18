// CRUD Operations

use("crudDB");

console.log(db);

// CREATE

// db.createCollection("Courses");
// db.Courses.insertOne({
// // 	name: "Harrys web dev free course",
// // 	price: 0,
// // 	assignment: 12,
// // 	projects: 45,
// });

// db.Courses.insertMany([
// 	{
// 		name: "Harry's Web Dev Free Course",
// 		price: 0,
// 		assignment: 12,
// 		projects: 45,
// 	},
// 	{
// 		name: "Beginner's Python Programming",
// 		price: 0,
// 		assignment: 10,
// 		projects: 30,
// 	},
// 	{
// 		name: "Java Fundamentals",
// 		price: 0,
// 		assignment: 15,
// 		projects: 40,
// 	},
// 	{
// 		name: "Introduction to Machine Learning",
// 		price: 0,
// 		assignment: 20,
// 		projects: 55,
// 	},
// 	{
// 		name: "Graphic Design Essentials",
// 		price: 0,
// 		assignment: 8,
// 		projects: 25,
// 	},
// 	{
// 		name: "Digital Marketing Basics",
// 		price: 0,
// 		assignment: 10,
// 		projects: 35,
// 	},
// 	{
// 		name: "Photoshop Mastery",
// 		price: 0,
// 		assignment: 15,
// 		projects: 50,
// 	},
// 	{
// 		name: "Cybersecurity 101",
// 		price: 0,
// 		assignment: 18,
// 		projects: 60,
// 	},
// 	{
// 		name: "Data Science for Beginners",
// 		price: 0,
// 		assignment: 12,
// 		projects: 42,
// 	},
// 	{
// 		name: "Video Editing Workshop",
// 		price: 0,
// 		assignment: 10,
// 		projects: 28,
// 	},
// 	{
// 		name: "UI/UX Design Principles",
// 		price: 0,
// 		assignment: 14,
// 		projects: 48,
// 	},
// 	{
// 		name: "Mobile App Development Basics",
// 		price: 0,
// 		assignment: 16,
// 		projects: 38,
// 	},
// 	{
// 		name: "Business Analytics Fundamentals",
// 		price: 0,
// 		assignment: 22,
// 		projects: 55,
// 	},
// 	{
// 		name: "Arduino Programming",
// 		price: 0,
// 		assignment: 12,
// 		projects: 30,
// 	},
// 	{
// 		name: "Networking Essentials",
// 		price: 0,
// 		assignment: 18,
// 		projects: 50,
// 	},
// 	{
// 		name: "Introduction to Cloud Computing",
// 		price: 0,
// 		assignment: 14,
// 		projects: 42,
// 	},
// 	{
// 		name: "Game Development Basics",
// 		price: 0,
// 		assignment: 20,
// 		projects: 48,
// 	},
// 	{
// 		name: "E-commerce Strategies",
// 		price: 0,
// 		assignment: 16,
// 		projects: 36,
// 	},
// 	{
// 		name: "Android App Development",
// 		price: 0,
// 		assignment: 15,
// 		projects: 40,
// 	},
// 	{
// 		name: "Web Design Principles",
// 		price: 0,
// 		assignment: 12,
// 		projects: 32,
// 	},
// ]);

// READ

// let price = db.Courses.find({ price: 0 });
// console.log(price.toArray());

// let price2 = db.Courses.findOne({ price: 0 });
// console.log(price2);

// UPDATE

// db.Courses.updateOne({ price: 0 }, { $set: { price: 2000 } });
// db.Courses.updateMany({ price: 0 }, { $set: { price: 2000 } });

// DELETE

// db.Courses.deleteOne({ price: "2000" });
// db.Courses.deleteMany({ price: 0 });
// db.Courses.deleteMany({ name: "Harrys web dev free course" });

// REPLACE

// db.Courses.replaceOne(
// 	{ price: 0 },
// 	{
// 		name: "Sigma Web Development Express",
// 		price: 0,
// 		assignment: 12,
// 		projects: 45,
// 	}
// );

