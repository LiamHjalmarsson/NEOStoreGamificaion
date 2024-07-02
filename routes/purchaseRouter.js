import { Router } from 'express';
const router = Router();

import {createPurchase, getPurchases, getPurchase } from '../controllers/purchaseController.js';

router.get('/', getPurchases);
router.post('/', createPurchase);

router.get('/:id', getPurchase);

export default router;