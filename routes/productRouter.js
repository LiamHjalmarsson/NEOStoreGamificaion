import { Router } from "express";
import { getProducts, createProducts, getProduct, updateProduct, deleteProduct } from "../controllers/productController.js";

let router = Router();

router.get('/', getProducts);
router.post('/', createProducts);
router.get('/:id', getProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;