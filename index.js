const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const RAZORPAY_KEY_ID = "rzp_live_l7xAVsGH4I68RB";
const RAZORPAY_KEY_SECRET = "E6s7oC9DWkiMgC3I5KeEuJTf";

// Webhook route
app.post("/api/webhook", async (req, res) => {
    const event = req.body;

    if (event.event === "payment.authorized") {
        const paymentId = event.payload.payment.entity.id;
        const amount = event.payload.payment.entity.amount; // Amount in paise (₹1 = 100 paise)

        try {
            // Capture the payment
            const response = await axios({
                method: "POST",
                url: https://api.razorpay.com/v1/payments/${paymentId}/capture,
                auth: {
                    username: rzp_live_l7xAVsGH4I68RB,
                    password: E6s7oC9DWkiMgC3I5KeEuJTf
                },
                data: {
                    amount: amount,
                    currency: "INR"
                }
            });

            console.log("Payment captured:", response.data);
        } catch (error) {
            console.error("Error capturing payment:", error.response.data);
        }
    }

    res.status(200).json({ message: "Webhook received" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(Server running on port ${PORT});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

