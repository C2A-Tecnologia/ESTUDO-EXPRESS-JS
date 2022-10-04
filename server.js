const { application } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
let checkBody = "";

app.get("/", (req, res) => {
    res.json({ check: "ok" })
});

app.post("/", (req, res) => {
    checkBody = req.body.checkBody;
    res.send({ status: 200, statusText: checkBody });
});

app.listen(port, () => {
    console.log("On init checkBody=", checkBody);
    console.log("listening on port " + port);
});

