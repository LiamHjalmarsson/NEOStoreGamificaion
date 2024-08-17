import React from 'react';
import { useCartContext } from '../../../../../context/cartContext';
import CartItem from './CartItem';
import { FaX } from 'react-icons/fa6';
import LinkButton from '../../../../elements/LinkButton';
import SecondaryButton from '../../../../elements/SecondaryButton';

const Cart = ({ onClose, open }) => {
    let { cartItems, getCartTotal, clearCart } = useCartContext();

    return (
        <div className={`fixed h-full top-0 right-0 bg-stone-200 dark:bg-stone-800 shadow-lg z-50 max-w-md w-full p-4 md:p-8 flex flex-col gap-4 transition transform duration-500 ${open ? 'translate-x-0' : ' translate-x-full'}`}>
            <div className="flex justify-between items-center mt-6">
                <h2 className="text-2xl font-bold">
                    Your Cart
                </h2>
                <button onClick={onClose} className="text-xl font-semibold">
                    <FaX />
                </button>
            </div>

            <ul className='flex flex-col gap-6 dark:text-stone-200'>
                {cartItems.map((item, index) => (
                    <CartItem key={index} item={item} />
                ))}
            </ul>

            <div className="mt-6">
                <div className="flex justify-between items-center mb-8">
                    <span className="text-lg font-semibold">
                        Total:
                    </span>
                    <span className="text-lg font-semibold">
                        {getCartTotal().toFixed(2)} SEK
                    </span>
                </div>

                <div className='flex max-md:flex-col justify-between gap-6 md:gap-12'>
                    <SecondaryButton onclick={clearCart}>
                        Clear cart
                    </SecondaryButton>
                    <LinkButton onclick={onClose} href="/cart" custom="bg-rose-600 text-stone-200 border-none hover:bg-rose-500">
                        Checkout
                    </LinkButton>
                </div>
            </div>
        </div>
    );
}

export default Cart;
