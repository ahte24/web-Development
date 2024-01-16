//-------------Types of middleware-----------------//
//-----https://expressjs.com/en/guide/using-middleware.html-----//
// 01. Application-level middleware
// 02. Router-level middleware
// 03. Error-handling middleware
// 04. Built-in middleware
// 05. Third-party middleware

const express = require("express");
const app = express();
const port = 3000;
const blogs = require("./routes/blog");
const fs = require("fs");

// app.use(express.static("public"));

app.use("/blogs", blogs);
app.use((req, res, next) => {
	console.log(req.headers);
	req.ahtesham = "Hello i am Ahtesham Zaman...";
	fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method} request.\n`);
	console.log(`Middlewere one.`);
	// res.send("hello this is middleware one..")
	next();
});

app.use((req, res, next) => {
	req.zaman = "Hello i am zaman bhai...";
	console.log("Middlewere two.");
	next();
});

app.get("/", (req, res) => {
	res.send("Hello world!");
});
app.get("/about", (req, res) => {
	console.log("About request sent.");
	res.send("Hello about!" + req.ahtesham);
});

app.get("/contactus", (req, res) => {
	console.log("Contact request sent.");
	res.send("Hello Contact us! " + req.zaman);
});

app.listen(port, () => {
	console.log(`Example app listining on port ${port}`);
});
