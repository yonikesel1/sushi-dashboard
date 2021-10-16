const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

/* Port 8080 */
app.listen(8080, () => {
  console.log("Server is listening on port 8080...");
});
