import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Home page");
});

app.listen(port, () => {
    console.log(`it's running on port ${port}`);
});
