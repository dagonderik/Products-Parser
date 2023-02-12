import updateProductFields from "../components/UpdateProductFields.js";
import Products from "../models/ProductsModel.js";
import testConnection from "../test.js";

export const getDetails = async (req, res) => {
    const products = new Products(testConnection);
  try {
    await products.save();
    await Products.deleteOne({ code: testConnection.code });
    const lastUpdate = await Products.find().sort({ imported_t: -1}).limit(1);
    console.log(lastUpdate);
    res.status(200).send(`Write/Read channels ok! The last update was made at ${lastUpdate[0].imported_t}`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByCode = async (req, res) => {
  try {
    const products = await Products.find({ code: req.params.code });
    res.json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const putProductsByCode = async (req, res) => {
  const products = new Products(req.body);
  const existingProduct = await Products.find({ code: req.params.code });
  try {
    if (existingProduct.length != 0) {
      updateProductFields(products, existingProduct);
      await Products.updateOne(
        { code: req.params.code },
        { $set: { imported_t: Date(), status: "published" } }
      );
      res.status(201).json(products);
    } else {
      await products.save();
      await Products.updateOne(
        { code: req.params.code },
        { $set: { imported_t: Date(), status: "published" } }
      );
      res.status(201).json(products);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProducts = async (req, res) => {
  try {
    const updatedProducts = await Products.updateOne(
      { code: req.params.code },
      { $set: { status: "trash" } }
    );
    res.status(200).json(updatedProducts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
