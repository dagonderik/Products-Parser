import Products from "../models/ProductsModel.js";


export const getDetails = async (req, res) => {
    // try {
    //     const products = await Products.storageSize();
    //     res.json(products);
    // } catch (error) {
    //     res.status(500).json({message: error.message});
    // }
}

export const getProducts = async (req, res) => {
    try {
        const products = await Products.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getProductsByCode = async (req, res) => {
    try {
        const products = await Products.find({code:req.params.code});
        res.json(products);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const  putProductsByCode = async (req, res) => {
    const products = new Products(req.body);
    try {
        const insertedProducts = await products.save();
        res.status(201).json(insertedProducts);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteProducts = async (req, res) => {
    try {
        const updatedProducts = await Products.updateOne({code:req.params.code}, {$set: {status: "trash"}});
        res.status(200).json(updatedProducts);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}