const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.send("Hello my name is mohammed ahteshamuz zaman");
});
app.get("/about", (req, res) => {
	res.send("About us");
});
app.get("/contact", (req, res) => {
	res.send("Contact");
});
app.get("/home/:slug", (req, res) => {
	//URL: http://localhost:3000/home/zaman?mode=dark&region=in
	console.log(req.params); //{ slug: 'zaman' }
	console.log(req.query); //{ mode: 'dark', region: 'in' }
	res.send(`hello intro to ${req.params.slug}`);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
