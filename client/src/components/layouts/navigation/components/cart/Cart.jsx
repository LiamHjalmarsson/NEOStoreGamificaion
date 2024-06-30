import React from 'react';
import { useCartContext } from '../../../../../context/cartContext';
import CartItem from './CartItem';
import { FaX } from 'react-icons/fa6';
import LinkButton from '../../../../elements/LinkButton';
import Button from '../../../../elements/Button';

const Cart = ({ onClose, open }) => {
    let { cartItems, getCartTotal } = useCartContext();

    return (
        <div className={`fixed h-full top-0 right-0 bg-stone-200 dark:bg-stone-800 shadow-lg z-20  max-w-md w-full p-8 flex flex-col gap-4 transition transform duration-500 ${open ? 'translate-x-0' : ' translate-x-full'}`}>
            <div className="flex justify-between items-center my-6">
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
                    <span className="text-lg font-semibold text-stone-800">
                        Total:
                    </span>
                    <span className="text-lg font-semibold text-stone-800">
                        {getCartTotal().toFixed(2)} SEK
                    </span>
                </div>
                <div className='flex justify-between gap-12'>
                    <Button>
                        Clear cart
                    </Button>
                    <LinkButton onclick={onClose} href="/cart" custom="dark:bg-rose-500 dark:text-stone-200">
                        Checkout
                    </LinkButton>
                </div>
            </div>
        </div>
    );
}

export default Cart;
