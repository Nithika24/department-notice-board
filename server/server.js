const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/department_notice_board")
    .then(() => {
        console.log("MongoDB Connected Successfully");
    })
    .catch((err) => {
        console.log("MongoDB Connection Failed");
        console.log(err.message);
    });

const noticeSchema = new mongoose.Schema({
    title: String,
    message: String
});

const Notice = mongoose.model("Notice", noticeSchema);

app.get("/", (req, res) => {
    res.send("Welcome to Department Notice Board");
});

app.get("/faculty", (req, res) => {
    res.json([
        "Dr. Kumar",
        "Dr. Priya",
        "Dr. Arun",
        "Dr. Divya"
    ]);
});

app.post("/api/notices", async (req, res) => {
    const { title, message } = req.body;

    if (!title || !message) {
        return res.status(400).json({
            error: "Title and message are required"
        });
    }

    const notice = new Notice({
        title,
        message
    });

    await notice.save();

    res.json(notice);
});

app.get("/api/notices", async (req, res) => {
    const notices = await Notice.find();
    res.json(notices);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});