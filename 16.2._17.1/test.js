const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce", {
  useNewUrlParser: true,
});

const Product = mongoose.model("Product", {
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
  },
  details: {
    description: { type: String, required: true, minlength: 10 },
    price: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0) {
          throw new Error("price must be a positive number");
        }
      },
    },
    discount: { type: Number, default: 0 },
    images: {
      type: Array,
      required: true,
      validate(value) {
        if (value.length < 2) {
          throw new Error("need at least two images");
        }
      },
    },
    phoneNumber: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isMobilePhone(value, "he-IL")) {
          throw new Error("phone number is valid according to israel phone rules");
        }
      },
    },
  },
  dateAdded: { type: Date, default: new Date() },
});

const product = new Product({
  name: "macbook pro",
  category: "computers",
  isActive: true,
  details: {
    description: "the best laptop",
    price: 5000,
    images: ["https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80", "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80"],
    phoneNumber: "+972546393591",
  },
});

product
  .save()
  .then(() => {
    console.log(product);
  })
  .catch((error) => {
    console.log(error);
  });
