const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// ✅ Add this GET route to check if the server is running
app.get("/", (req, res) => {
    res.send("Server is live! 🎉");
});

// ✅ Webhook endpoint
app.post("/api/webhook", (req, res) => {
    console.log("Webhook received:", req.body);
    res.status(200).json({ message: "Webhook received" });
});

// ✅ Add a GET route to test if webhook endpoint is reachable
app.get("/api/webhook", (req, res) => {
    res.send("Webhook endpoint is live! But use POST to send data.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

