import express from "express";
import mongoose from "mongoose";
import { Employees } from "./model/Employees.js";

const app = express();
const port = 3000;

const connection = await mongoose.connect("mongodb://127.0.0.1:27017/myapp");

app.get("/", (req, res) => {
	const employees = new Employees({
		name: "Ahtesham",
		salary: 4500000,
		language: "Javascript",
		city: "Saudi Arabia",
		isManager: true,
	});
	employees.save();
	res.send("Hello world!");
});

app.listen(port, () => {
	console.log(`Dummy app listening on ${port}`);
});
