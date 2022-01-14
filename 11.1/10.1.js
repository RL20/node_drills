//get, post, delete, put
const express = require("express");
const app = express();

app.get("/numbers", (req, res) => {
  res.send("success using get");
});
app.post("/numbers", (req, res) => {
  res.send("success using post");
});
app.put("/numbers", (req, res) => {
  res.send("success using put");
});
app.delete("/numbers", (req, res) => {
  res.send("success using delete");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listentinig to port: ${PORT}`);
});
