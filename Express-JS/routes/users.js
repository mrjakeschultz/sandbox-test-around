const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("User List");
});

router.get("/new", (req, res) => {
	res.send("Users New Form");
});

router.post("/", (req, res) => {
	res.send("Post Route to make a new user");
});

router.get("/:id", (req, res) => {
	res.send(`Get User With ID ${req.params.id}`);
});

router.put("/:id", (req, res) => {
	res.send(`Get User With ID ${req.params.id}`);
});

module.exports = router;
