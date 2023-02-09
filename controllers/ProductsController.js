import Products from "../models/ProductsModel.js";

export const getDetails = async (req, res) => {
    try {
        const Products = await Products.find();
        res.json(Products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getProducts = async (req, res) => {
    try {
        const Products = await Products.find();
        res.json(Products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getProductsByCode = async (req, res) => {
    try {
        const Products = await Products.findById(req.params.code);
        res.json(Products);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const putProducts = async (req, res) => {
    const Products = new Products(req.body);
    try {
        const insertedProducts = await Products.save();
        res.status(201).json(insertedProducts);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateProducts = async (req, res) => {
    try {
        const updatedProducts = await Products.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedProducts);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteProducts = async (req, res) => {
    try {
        const deletedProducts = await Products.updateOne({_id:req.params.id}, {$set: "trash"});
        res.status(200).json(deletedProducts);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}