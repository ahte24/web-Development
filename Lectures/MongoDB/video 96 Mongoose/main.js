import express from "express";
import mongoose from "mongoose";
import { Todo } from "./models/todo.js";

const app = express();
const port = 3000;

const connection = await mongoose.connect("mongodb://localhost:27017/todo");


app.get("/", (req, res) => {
	const todo = new Todo({
		// name: "Hey first todo application.",
		desc: "Description for first todo application",
		isDone: false,
		days: Math.floor(Math.random() * 45 + 4655456 * Math.random()),
	});
	todo.save();
	res.send("Hello world...");
});
app.get("/todo", async (req, res) => {
	const todo = await Todo.findOne({});
	console.log(todo);
	res.json({
		name: todo.name,
		desc: todo.desc,
		isDone: todo.isDone,
		days: todo.days,
	});
});

app.listen(port, () => {
	console.log(`Demo app listening on port ${port}`);
});
