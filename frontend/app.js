const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

const BACKEND_URL = process.env.BACKEND_URL || "http://backend:5000";

// Serve static files
app.use(express.static("public"));

// Proxy route to backend
app.get("/api/data", async (req, res) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/health`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Backend not reachable" });
    }
});

app.listen(PORT, () => {
    console.log(`Frontend running on port ${PORT}`);
});
