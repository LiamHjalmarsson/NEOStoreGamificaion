import React, { useState } from 'react';
import { useCartContext } from '../../context/cartContext';
import Heading from '../../components/heading/Heading';
import CartProduct from './components/CartProduct';
import UserDetails from './components/UserDetails';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';


export const cartAction = async ({ request }) => {
    let formData = await request.formData();

    let data = Object.fromEntries(formData);

    let user = JSON.parse(data.user);
    let cart = JSON.parse(data.cart);
    let earnedPoints = JSON.parse(data.earnPoints);
    let discount = data.discount;
    let totalToPay = data.totalToPay;

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

    return redirect(`/user/${user._id}`);
}

const Cart = () => {
    let { cartItems, getCartTotal } = useCartContext();

    return (
        <section className='w-full min-h-[90vh] flex flex-col text-stone-800 dark:text-stone-200'>

            <div className='flex gap-24 w-full mx-auto max-w-7xl mt-24 px-10'>
                <div className='w-full flex flex-wrap flex-col gap-8 max-w-3xl mx-auto'>
                    <Heading title="Cart" />
                    {
                        cartItems.map((item, index) => (
                            <CartProduct item={item} key={index} />
                        ))
                    }
                </div>

                <UserDetails />
            </div>

        </section >
    );
}

export default Cart;
