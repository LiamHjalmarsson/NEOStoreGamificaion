import { body, param, validationResult } from 'express-validator';
import { BadRequestError, NotFoundError } from '../errors/customErrors.js';
import mongoose from 'mongoose';
import Category from '../models/categoryModel.js';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';

const withValidationErrors = (values) => {
    return [
        values,
        (req, res, next) => {

            let errors = validationResult(req);

            if (!errors.isEmpty()) {
                let errorMessages = errors.array().map((error) => error.msg);

                throw new BadRequestError(errorMessages);
            }

            next();
        },
    ];
};

export const validateCategoryInput = withValidationErrors([
    body("title")
        .notEmpty().withMessage("Title is required"),
]);

export const validateProductInput = withValidationErrors([
    body("title")
        .notEmpty().withMessage("Title is required"),
    body("price")
        .notEmpty().withMessage("Price is required"),
    body("category")
        .notEmpty().withMessage("Category is required"),
]);

export const validateLoginInput = withValidationErrors([
    body("email")
        .notEmpty().withMessage("Email is required"),
    body("password")
        .notEmpty().withMessage("Password is required"),
]);

export const validateRegisterInput = withValidationErrors([
    body('email')
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('invalid email format')
        .custom(async (email) => {
            let user = await User.findOne({ email });
            if (user) {
                throw new BadRequestError('email already exists');
            }
        }),
    body("password")
        .notEmpty().withMessage("Password is required ")
        .isLength({ min: 8 }).withMessage("Password must be at least 8 characters "),
    body("firstName")
        .notEmpty().withMessage("First name is required"),
]);

export const validateParamsCategory = withValidationErrors([
    param("id")
        .custom(async (value) => {
            let isValidId = mongoose.Types.ObjectId.isValid(value);

            if (!isValidId) throw new BadRequestError("Invalid MongoDB Id");

            let category = await Category.findById(value);

            if (!category) throw new NotFoundError(`No category with id : ${value}`);
        })
]);

export const validateParamsProduct = withValidationErrors([
    param("id")
        .custom(async (value) => {
            let isValidId = mongoose.Types.ObjectId.isValid(value);

            if (!isValidId) throw new BadRequestError("Invalid MongoDB Id");

            let product = await Product.findById(value);

            if (!product) throw new NotFoundError(`No Product with id : ${value}`);
        })
]);