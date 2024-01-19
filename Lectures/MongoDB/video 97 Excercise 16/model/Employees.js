import mongoose from "mongoose";
const { Schema } = mongoose;

const EmployeesSchema = new Schema({
	name: String,
	salary: Number,
	language: String,
	city: String,
	isManager: Boolean,
});

export const Employees = mongoose.model("Employees", EmployeesSchema);
