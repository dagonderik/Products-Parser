import express from "express";
import { 
    getDetails,
    getProducts, 
    putProductsByCode,
    getProductsByCode,
    deleteProducts
} from "../controllers/ProductsController.js";

const router = express.Router();

router.get('/', getDetails);
router.put('/products/:code', putProductsByCode);
router.delete('/products/:code', deleteProducts);
router.get('/products/:code', getProductsByCode);
router.get('/products', getProducts);

export default router;