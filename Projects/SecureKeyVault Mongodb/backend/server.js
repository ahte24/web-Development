import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { MongoClient } from "mongodb";
import bodyParser from "body-parser";
import cors from "cors";


// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "securekeyvault";
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());

client.connect();
console.log("Connected successfully to server");

// Get all the passwords
app.get("/", async (req, res) => {
	const db = client.db(dbName);
	const collection = db.collection("passwords");
	const findResult = await collection.find({}).toArray();
	res.json(findResult);
});

// save a password
app.post("/", async (req, res) => {
	const password = req.body;
	const db = client.db(dbName);
	const collection = db.collection("passwords");
	const findResult = await collection.insertOne(password);
	res.send({ success: true, result: findResult });
});

// Delete a password by id
app.delete("/", async (req, res) => {
	const password = req.body;
	const db = client.db(dbName);
	const collection = db.collection("passwords");
	const findResult = await collection.deleteOne(password);
	res.send({ success: true, result: findResult });
});

app.listen(port, () => {
	console.log(`dummy app listening on http://localhost:${port} `);
});
