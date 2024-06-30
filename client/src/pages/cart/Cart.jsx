import React, { useEffect, useState } from 'react';
import { useCartContext } from '../../context/cartContext';
import Heading from '../../components/heading/Heading';
import CartForm from './components/CartForm';
import { redirect, useActionData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CartDetails from './components/CartDetails';
import CartConfirmation from './components/CartConfirmation';


export const cartAction = async ({ request }) => {
    let formData = await request.formData();

    let data = Object.fromEntries(formData);

    let user = JSON.parse(data.user);
    let cart = JSON.parse(data.cart);
    let earnedPoints = JSON.parse(data.earnPoints);
    let discount = JSON.parse(data.discount);

    if (cart.length <= 0) {
        toast.error("Cart is empty");
    }

    await fetch(`/api/user/update-user`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            pointsEarned: user.pointsEarned - discount + earnedPoints,
            totalPointsEarned: user.totalPointsEarned + earnedPoints
        })
    });

    return true;
}

const Cart = () => {
    let { clearCart } = useCartContext();

    let navigate = useNavigate();

    let confirmation = useActionData();

    let confirmationHandler = () => {
        clearCart();
        navigate(`/`);
    }

    return (
        <section className='w-full min-h-[90vh] flex flex-col relative'>
            <div className='flex gap-24 w-full mx-auto max-w-7xl mt-24 px-10'>
                <CartDetails />
                <CartForm />
            </div>


            {
                confirmation && <CartConfirmation confirmationHandler={confirmationHandler} />
            }
        </section >
    );
}

export default Cart;
