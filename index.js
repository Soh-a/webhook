const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Handle GET request for testing
app.get("/api/webhook", (req, res) => {
    res.send("Webhook endpoint is live! But use POST to send data.");
});

// Handle POST request for webhook
app.post("/api/webhook", (req, res) => {
    console.log("Webhook received:", req.body);
    res.status(200).json({ message: "Webhook received" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

