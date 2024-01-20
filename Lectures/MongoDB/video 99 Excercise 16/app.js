import express from "express";
import mongoose from "mongoose";
import { Employee } from "./model/Employee.js";
const app = express();
const port = 3000;
mongoose.connect("mongodb://127.0.0.1:27017/Company");

app.set("view engine", "ejs");

const getRandom = (arr) => {
	let rno = Math.floor(Math.random() * (arr.length - 1));
	return arr[rno];
};

app.get("/", (req, res) => {
	res.render("index", { foo: "FOO" });
	// res.send("hello world!");
});

app.get("/generate", async (req, res) => {

	await Employee.deleteMany({})
	// Generate random data
	let randomName = ["Ahtesham", "Arshad", "Suchi", "Nikeeta"];
	let randomLang = ["Javascript", "python", "C++", "Java"];
	let randomCity = [
		"Saudi Arabia",
		"Hydrabad",
		"Bengaluru",
		"Kolkata",
		"Gurugram",
	];
	for (let index = 0; index < 10; index++) {
		const e = await Employee.create({
			name: getRandom(randomName),
			salary: Math.floor(Math.random() * 20000000),
			language: getRandom(randomLang),
			city: getRandom(randomCity),
			isManager: Math.random() > 0.5 ? true : false,
		});

		await e.save();
		console.log(Math.random() > 0 ? true : false);
	}
	res.render("index", { foo: "FOO" });
	// res.send("hello world!");
});

app.listen(port, () => {
	console.log(`Dummy app listening on port ${port}`);
});
