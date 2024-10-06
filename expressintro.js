import express from "express";

const app = express();

app.get('/', (req, res) => {
    return res.send("hello from server");
});

app.listen(8000, (req, res) => {
    console.log("server started");
})
