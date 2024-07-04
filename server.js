const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;
const BASE_URL = process.env.BASE_URL || "/portfolio";

// Serve the static files from the React app
app.use(BASE_URL, express.static(path.join(__dirname, "build")));

// Handles any requests that don't match the ones above
app.get(`${BASE_URL}/*`, (_req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
