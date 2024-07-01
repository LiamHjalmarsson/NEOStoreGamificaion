import { StatusCodes } from 'http-status-codes';
import Purchase from '../models/purchaseModel.js';

export const getPurchase = async (req, res) => {
    let purchase = await Purchase.find({});
    res.status(StatusCodes.OK).json({ purchase });
}

export const createPurchase = async (req, res) => {
    let purchase = await Purchase.create(req.body);

    res.status(StatusCodes.OK).json({ purchase });
}

export default createPurchase;
