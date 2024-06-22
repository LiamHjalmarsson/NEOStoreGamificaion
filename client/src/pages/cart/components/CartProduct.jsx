import React from 'react';
import { useCartContext } from '../../../context/cartContext';
import Image from '../../../components/elements/Image';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const CartProduct = ({ item }) => {
    let { removeFromCart, addToCart } = useCartContext();

    return (
        <div className='border flex justify-between items-center border-stone-800 gap-6 rounded-md p-4 text-lg bg-stone-200 dark:bg-stone-800 transition-colors duration-300'>
            <div className='flex items-center w-1/2 p-2'>
                <div className='w-24 group'>
                    <Image img={item.image} className='rounded-md shadow-sm' />
                </div>
                <div className='py-2 px-4'>
                    <h3 className='font-bold tracking-wide text-xl text-stone-800 dark:text-stone-200'>
                        {item.title}
                    </h3>
                    <p className='text-sm text-stone-600 dark:text-stone-400'>
                        ${item.price.toFixed(2)}
                    </p>
                </div>
            </div>
            <div className='flex gap-6 px-6 flex-grow justify-end'>
                <div className='flex items-center gap-6 justify-center flex-grow'>
                    <button onClick={() => removeFromCart(item)} className='text-3xl transition-colors duration-300 text-red-500 hover:text-red-700'>
                        <CiCircleMinus />
                    </button>
                    <p className='font-medium text-xl text-stone-800 dark:text-stone-200'>
                        {item.quantity}
                    </p>
                    <button onClick={() => addToCart(item)} className='text-3xl transition-colors duration-300 text-green-500 hover:text-green-700'>
                        <CiCirclePlus />
                    </button>
                </div>
                <div className='text-center pr-6 font-medium text-stone-800 dark:text-stone-200'>
                    ${(item.price * item.quantity).toFixed(2)}
                </div>
            </div>
        </div>
    );
}

export default CartProduct;
