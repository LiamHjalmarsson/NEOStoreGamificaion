import { Router } from "express";
import { getProducts, createProducts, getProduct, updateProduct, deleteProduct } from "../controllers/productController.js";
import { validateParamsProduct, validateProductInput } from "../middleware/validationMiddleware.js";

let router = Router();

router.get('/', getProducts);
router.post('/', validateProductInput, createProducts);
router.get('/:id', validateParamsProduct, getProduct);
router.patch('/:id', validateParamsProduct, updateProduct);
router.delete('/:id', validateParamsProduct, deleteProduct);

export default router;