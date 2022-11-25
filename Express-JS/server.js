const express = require("express");
const app = express();

app.get("/", (req, res) => {
	console.log(
		"🚀 ~ file: server.js ~ line 7 ~ app.get ~ testing square one get route",
		app.get
	);
	res.render("index");
});

app.listen(3000);
