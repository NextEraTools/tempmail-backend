import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const API_KEY = process.env.API_KEY;

// Create inbox
app.post("/create", async (req, res) => {
  const r = await fetch("https://api.mailslurp.com/inboxes", {
    method: "POST",
    headers: { "x-api-key": API_KEY }
  });
  res.json(await r.json());
});

// Get emails
app.get("/emails/:id", async (req, res) => {
  const r = await fetch(`https://api.mailslurp.com/inboxes/${req.params.id}/emails`, {
    headers: { "x-api-key": API_KEY }
  });
  res.json(await r.json());
});

// Read email
app.get("/read/:id", async (req, res) => {
  const r = await fetch(`https://api.mailslurp.com/emails/${req.params.id}`, {
    headers: { "x-api-key": API_KEY }
  });
  res.json(await r.json());
});

app.listen(3000, () => console.log("Server running"));
