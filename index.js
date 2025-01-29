const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || "3000";

app.get("/", (req, res) => {
  try {
    const isoDate = new Date().toISOString().split(".")[0] + "Z";
    res.status(200).json({
      email: "timberwamalwa@yahoo.com",
      current_datetime: isoDate,
      github_url: "https://github.com/10-menachi/hng_12_stage_zero.git",
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
