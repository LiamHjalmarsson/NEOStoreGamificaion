import React, { useState } from 'react';
import { useCartContext } from '../../context/cartContext';
import Heading from '../../components/heading/Heading';
import CartProduct from './components/CartProduct';
import UserDetails from './components/UserDetails';

const Cart = () => {
    let { cartItems, getCartTotal } = useCartContext();

    return (
        <section className='w-full min-h-[85vh] flex flex-col justify-center items-center text-stone-800 dark:text-stone-200'>

            <div className='flex gap-24 w-full mx-auto max-w-7xl mt-12 px-10'>
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
