import React, { useEffect } from 'react';
import { useCartContext } from '../../context/cartContext';
import CartForm from './components/CartForm';
import { useActionData } from 'react-router-dom';
import { toast } from 'react-toastify';
import CartDetails from './components/CartDetails';
import CartConfirmation from './components/CartConfirmation';
import { useRootContext } from '../Root';

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

    let purchaseObject = {
        userId: user._id,
        items: cart.map(item => ({
            productId: item._id,
            quantity: item.quantity,
            price: item.price
        })),
    };

    let purchaseResponse = await fetch(`/api/purchase`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(purchaseObject)
    });

    let { purchase } = await purchaseResponse.json();

    let achievementUpdate = [...user.achievements];
    let ordersCount = user.orders.length + 1;

    if (ordersCount === 1) {
        achievementUpdate.push('6681828a064778b8918cfebd'); 
    }

    let userResponses = await fetch(`/api/user/update-user`, {
        method: "PATCH",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            pointsEarned: user.pointsEarned - discount + earnedPoints,
            totalPointsEarned: user.totalPointsEarned + earnedPoints,
            orders: [...user.orders, purchase._id],
            achievements: achievementUpdate
        })
    });
    
    let userRecourse = await userResponses.json();

    return userRecourse;
}

const Cart = () => {
    let { clearCart } = useCartContext();
    let confirmation = useActionData();

    let confirmationHandler = () => {
        clearCart();
    }

    return (
        <section className='w-full min-h-[90vh] flex flex-col relative'>
            <div className='flex gap-24 w-full mx-auto max-w-7xl mt-24 px-10'>
                <CartDetails />
                <CartForm />
            </div>

            {confirmation && <CartConfirmation confirmationHandler={confirmationHandler} />}
        </section >
    );
}

export default Cart;
