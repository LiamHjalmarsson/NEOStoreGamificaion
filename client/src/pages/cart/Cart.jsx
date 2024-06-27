import React, { useEffect, useState } from 'react';
import { useCartContext } from '../../context/cartContext';
import Heading from '../../components/heading/Heading';
import CartProduct from './components/CartProduct';
import UserDetails from './components/UserDetails';
import { redirect, useActionData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


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
    let { cartItems, clearCart } = useCartContext();

    let navigate = useNavigate();

    let confirmation = useActionData();

    let confirmationHandler = () => {
        clearCart();
        navigate(`/`);
    }

    return (
        <section className='w-full min-h-[90vh] flex flex-col relative'>

            <div className='flex gap-24 w-full mx-auto max-w-7xl mt-24 px-10'>
                <div className='w-full flex flex-wrap flex-col gap-8 max-w-3xl mx-auto'>
                    {
                        cartItems.length > 0 && (
                            <>
                                <Heading title="Cart" />
                                {
                                    cartItems.map((item, index) => (
                                        <CartProduct item={item} key={index} />
                                    ))
                                }
                            </>
                        ) || (
                            <>
                                <Heading title="No items in cart" />
                            </>
                        )
                    }
                </div>

                { cartItems.length > 0 && <UserDetails /> }
            </div>


            {
                confirmation && (
                    <div className={`absolute w-full h-full top-0 left-0 bg-stone-800 bg-opacity-50 flex justify-center items-center`} onClick={confirmationHandler}>
                        <div className={`transition duration-300 bg-stone-200 dark:bg-stone-800 p-8 rounded-md w-1/2 text-center min-w-96`}>
                            <Heading title="Your order is now placed" />
                        </div>
                    </div>
                )
            }
        </section >
    );
}

export default Cart;
