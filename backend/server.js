const express = require("express");
const cors = require("cors");
const { marked } = require("marked");
const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.post("/convert", (req, res) => {
  const { markdown } = req.body;
  const html = marked(markdown);
  res.send({ html });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
