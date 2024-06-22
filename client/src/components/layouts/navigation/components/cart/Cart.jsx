import React from 'react';
import { useCartContext } from '../../../../../context/cartContext';
import Button from '../../../../elements/Button';
import CartItem from './CartItem';
import { FaX } from 'react-icons/fa6';

const Cart = ({ onClose, open }) => {
    let { cartItems, getCartTotal } = useCartContext();

    return (
        <div className={`fixed h-full top-0 right-0 bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200  max-w-md w-full p-4 flex flex-col z-10 gap-4 transition transform ${open ? 'translate-x-0' : ' translate-x-full'}`}>
            <div className="flex justify-between items-center my-6">
                <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-200">Your Cart</h2>
                <button onClick={onClose} className="text-xl font-semibold">
                    <FaX />
                </button>
            </div>

            <ul className='flex flex-col gap-6'>
                {cartItems.map((item, index) => (
                    <CartItem key={index} item={item} />
                ))}
            </ul>

            <div className="mt-6">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-stone-800 dark:text-stone-200">Total:</span>
                    <span className="text-lg font-semibold text-stone-800 dark:text-stone-200">${getCartTotal().toFixed(2)}</span>
                </div>
                <Button onclick={onClose} type="button" custom="w-full">
                    Checkout
                </Button>
            </div>
        </div>
    );
}

export default Cart;
