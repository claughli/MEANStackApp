import express from "express";

const app = express()

app.get('/', (req, res) => res.send("Hello Me"));

app.listen(3000, () => {
    console.log("Now listening on port 3000");
})