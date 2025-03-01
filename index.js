import express from "express";

const app = express();
app.use(express.json()); // Middleware to parse JSON

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to ZKTeco Callback Server" });
});

// ZKTeco Push Data Endpoint
app.post("/zkteco-callback", (req, res) => {
  console.log("Received Data from ZKTeco:", req.body);

  // Process and save data (e.g., MongoDB, PostgreSQL)
  res.status(200).send({ message: "Data received successfully" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
