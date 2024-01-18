import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
	name: { type: String, required: true, default: "Hello Guys." },
	desc: String,
	isDone: Boolean,
	days: Number,
});

export const Todo = mongoose.model("Todo", TodoSchema);
