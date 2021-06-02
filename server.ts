require("dotenv").config();

import express from "express";
import emailService from "./emailService";

const app = express();
app.use(express.json());

app.post("/welcome", (req, res) => {
    const message = req.body as any;

    emailService.sendMessage(message);

    res.sendStatus(200);
});

app.listen(8080, () => {
    console.log("Server is running.");
});