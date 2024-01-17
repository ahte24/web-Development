const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	siteName = "Ahte.co.in";
	searchText = "Search Now";
	let arr = [23, 43, 53, 64, 75, 75, 85, 6, 55];
	res.render("index", { siteName, searchText, arr });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
