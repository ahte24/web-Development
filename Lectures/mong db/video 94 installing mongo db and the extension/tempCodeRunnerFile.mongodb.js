/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use("SigmaDatabase");

// Insert a few documents into the courses collection.
db.getCollection("courses").insertMany([
	[
		{
			name: "HTML Basics",
			price: 15000,
			Instructor: "John Doe",
		},
		{
			name: "CSS Fundamentals",
			price: 18000,
			Instructor: "Jane Smith",
		},
		{
			name: "ReactJS Masterclass",
			price: 25000,
			Instructor: "Sam Williams",
		},
		{
			name: "Node.js for Beginners",
			price: 20000,
			Instructor: "Alex Johnson",
		},
		{
			name: "Angular Crash Course",
			price: 22000,
			Instructor: "Emily Davis",
		},
		{
			name: "Vue.js Essentials",
			price: 19000,
			Instructor: "Chris Martin",
		},
		{
			name: "JavaScript Design Patterns",
			price: 23000,
			Instructor: "Megan Taylor",
		},
		{
			name: "ES6 Features",
			price: 17000,
			Instructor: "Ryan Miller",
		},
		{
			name: "D3.js Data Visualization",
			price: 26000,
			Instructor: "Sophia Clark",
		},
		{
			name: "TypeScript for Beginners",
			price: 21000,
			Instructor: "David Wilson",
		},
		{
			name: "Web Development Bootcamp",
			price: 30000,
			Instructor: "Olivia Brown",
		},
		{
			name: "Responsive Web Design",
			price: 17000,
			Instructor: "Ethan Turner",
		},
		{
			name: "GraphQL Fundamentals",
			price: 24000,
			Instructor: "Ava Robinson",
		},
		{
			name: "Jest Testing Basics",
			price: 18000,
			Instructor: "Nathan Hall",
		},
		{
			name: "MongoDB Essentials",
			price: 22000,
			Instructor: "Zoe Garcia",
		},
		{
			name: "Webpack Configuration",
			price: 20000,
			Instructor: "Liam White",
		},
		{
			name: "Express.js Crash Course",
			price: 19000,
			Instructor: "Ella Turner",
		},
		{
			name: "Svelte Framework Intro",
			price: 21000,
			Instructor: "Isaac Reed",
		},
		{
			name: "WebAssembly Basics",
			price: 25000,
			Instructor: "Grace Young",
		},
		{
			name: "PWA Development Guide",
			price: 23000,
			Instructor: "Logan Hill",
		},
	],
]);

// Print a message to the output window.
console.log(`Done Inserting Data.`);
