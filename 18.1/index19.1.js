const express = require("express");
require("./db/mongoose");
const Product = require("./models/products");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/products", async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
  // .then(() => {
  //   res.status(201).send(product);
  // })
  // .catch((e) => {
  //   res.status(400).send(e);
  // });
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
  // .then((products) => {
  //   res.send(products);
  // })
  // .catch((e) => {
  //   res.status(500).send();
  // });
});

app.get("/products/active", async (req, res) => {
  const activeProducts = await Product.find({ isActive: true });
  try {
    res.status(200).send(activeProducts);
  } catch (error) {
    res.status(500).send(error);
  }
  // .then((products) => {
  //   if (!products) {
  //     return res.status(404).send();
  //   }
  //   res.send(products);
  // })
  // .catch((e) => {
  //   res.status(500).send();
  // });
});

app.get("/products/range", async (req, res) => {
  const minValue = req.query.min;
  const maxValue = req.query.max;
  const rangeProducts = await Product.find({
    "details.price": { $gte: minValue, $lte: maxValue },
  });
  try {
    res.status(200).send(rangeProducts);
  } catch (error) {
    res.status(500).send(error);
  }

  // .then((product) => {
  //   if (!product) {
  //     return res.status(404).send();
  //   }
  //   res.send(product);
  // })
  // .catch((e) => {
  //   res.status(500).send();
  // });
});

app.get("/products/:id", async (req, res) => {
  const _id = req.params.id;
  const pid = await Product.findById(_id);
  try {
    res.status(200).send(pid);
  } catch (error) {
    res.status(500).send(error);
  }
  // .then((product) => {
  //   if (!product) {
  //     return res.status(404).send();
  //   }
  //   res.send(product);
  // })
  // .catch((e) => {
  //   res.status(500).send();
  // });
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
