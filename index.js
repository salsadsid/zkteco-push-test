import express from "express";

const app = express();
app.use(express.json()); // Middleware to parse JSON

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to ZKTeco Callback Server" });
});

// Generate 100 unique sweet routes
const sweetMessages = [
  "You make my heart skip a beat,",
  "Your smile lights up my world,",
  "Every moment with you is special,",
  "You're my sunshine,",
  "My love for you grows daily,",
  "You're my everything,",
  "My heart belongs to you,",
  "You're my dream come true,",
  "I'm crazy about you,",
  "You complete me,",
];

for (let i = 1; i <= 100; i++) {
  app.get(`/roza${i}`, (req, res) => {
    const randomIndex = Math.floor(Math.random() * sweetMessages.length);
    const emoji = String.fromCodePoint(0x1f496 + (i % 10)); // Varying heart emojis
    const message = `${sweetMessages[randomIndex]} Roza! ${emoji} (Route ${i})`;

    res.status(200).send({
      message: message,
      secret:
        i % 5 === 0 ? `💌 Secret Message ${i}: You're amazing!` : undefined,
      counter: i,
    });
  });
}

// Special anniversary counter route
let visitCount = 0;
app.get("/forever", (req, res) => {
  visitCount++;
  res.status(200).send({
    message: `Our love grows stronger every day, Roza! 💖 (Visited ${visitCount} times)`,
  });
});

// ZKTeco Push Data Endpoint
app.post("/zkteco-callback", (req, res) => {
  console.log("Received Data from ZKTeco:", req.body);

  // Process and save data (e.g., MongoDB, PostgreSQL)
  res.status(200).send({ message: "Data received successfully" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
