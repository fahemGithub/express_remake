import express from "express";
import dotenv from "dotenv";
import router from "./routes/User.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Home page");
});

app.use("/user", router);
app.use("/create", router);

app.use("/send_msg", router);
app.use("/show_msg", router);

app.listen(port, () => {
    console.log(`it's running on port ${port}`);
});
