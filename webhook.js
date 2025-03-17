module.exports = (req, res) => {
  if (req.method === "POST") {
    // Parse webhook request body
    try {
      const payload = req.body;
      console.log("Received webhook:", payload);

      // Respond to Razorpay
      res.status(200).json({ success: true, message: "Webhook received" });
    } catch (error) {
      console.error("Webhook Error:", error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" }); // Only allow POST
  }
};

