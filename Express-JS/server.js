const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	console.log(
		"🚀 ~ file: server.js ~ line 7 ~ app.get ~ testing square one get route",
		app.get
	);
	res.render("index", {
		text: "Look how the value from the 'text' object is injected/called here on the html page being rendered.",
	});
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(3000);
