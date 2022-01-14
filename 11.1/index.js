//get, post, delete, put
// const numbers = require("./numbers.json");
// npm run start
const numbers = [1, 2, 3, 4, 5, 6];

const express = require("express");
const app = express();
app.use(express.json());

app.get("/numbers", (req, res) => {
  res.send(numbers);
});
app.post("/numbers", (req, res) => {
  // res.send(req.body.number);
  const num = req.body.number;
  numbers.push(num);
  res.status(201).send(numbers);
});
app.put("/numbers/:oldNum", (req, res) => {
  const oldNum = +req.params.oldNum; // + converts string to number
  const newNum = req.body.number;
  if (!newNum) {
    res.status(400).send("Missing new number");
  } else if (!oldNum) {
    res.status(400).send("Missing old number");
  } else if (!numbers.includes(oldNum)) {
    res.status(404).send("Number not found");
  } else {
    const index = numbers.indexOf(oldNum);
    numbers[index] = newNum;
    res.status(200).send(numbers);
  }
});

app.delete("/numbers/:num/", (req, res) => {
  const index = numbers.indexOf(parseInt(req.params.num));
  if (index > -1) {
    numbers.splice(index, 1);
  }
  res.send(numbers);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listentinig to port: ${PORT}`);
});
