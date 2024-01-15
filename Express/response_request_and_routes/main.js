const express = require("express");
const blog = require("./routes/blog");
const shop = require("./routes/shop");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/blog", blog);
app.use("/shop", shop);

app
	.get("/", (req, res) => {
		console.log("Heyy this is get request.");
		res.send("Hello World! This is get request and I am using postman...");
	})
	.post("/", (req, res) => {
		console.log("Heyy this is post request.");
		res.send("Hello world! This is post request and I am using postman...");
	})
	.put("/", (req, res) => {
		console.log("Heyy this is put request.");
		res.send("Hello world! This is put request and I am using postman...");
	})
	.delete("/", (req, res) => {
		console.log("Heyy this is delete request.");
		res.send("Delete request called and I am using postman...");
	})
	.get("/index", (req, res) => {
		console.log("Hello it's index");
		res.sendFile("templates/index.html", { root: __dirname });
	})
	.get("/api", (req, res) => {
		console.log("API request called");
		res.json({
			a: 1,
			b: 2,
			c: 3,
			d: 4,
			e: 5,
			name: ["Mohammed ahteshamuz Zaman", "Mohammed Iftekharuz Zaman"],
		});
	})
	.listen(port, () => {
		console.log(`Example app listening on port ${port}`);
	});
