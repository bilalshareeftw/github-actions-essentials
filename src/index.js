const express = require("express");
const { getProducts } = require("./controllers/products");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/products", (req, res) => {
    res.status(200).json(getProducts());
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
