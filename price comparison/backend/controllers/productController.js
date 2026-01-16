const Product = require("../models/product");

// ADD PRODUCT
exports.addProduct = async (req, res) => {
  try {
    const { name, price, store, productUrl } = req.body;

    const product = new Product({
      name,
      price,
      store,
      productUrl
    });

    await product.save();
    res.status(201).json(product);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL PRODUCTS
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// SEARCH PRODUCT
exports.searchProduct = async (req, res) => {
  try {
    const keyword = req.query.q || "";

    const products = await Product.find({
      name: { $regex: keyword, $options: "i" }
    });

    res.status(200).json(products);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
