import React from 'react';
import { useCartContext } from '../../../context/cartContext';
import Image from '../../../components/elements/Image';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const CartProduct = ({ item }) => {
    let { removeFromCart, addToCart } = useCartContext();

    return (
        <div className='flex justify-between items-center gap-6 p-2 text-lg bg-stone-200 dark:bg-stone-800 transition-colors duration-500'>
            <div className='flex items-center w-1/2 p-2'>
                <div className='w-32 h-32 group'>
                    <Image img={item.image} className='shadow-sm' />
                </div>
                <div className='py-2 px-4'>
                    <h3 className='font-bold tracking-wide text-xl'>
                        {item.title}
                    </h3>
                </div>
            </div>

            <div className='flex gap-6 px-6 flex-grow justify-end'>
                <div className='flex items-center gap-6 justify-center flex-grow'>
                    <button onClick={() => removeFromCart(item)} className='text-3xl transition-colors duration-500'>
                        <CiCircleMinus />
                    </button>
                    <p className='font-medium text-xl'>
                        {item.quantity}
                    </p>
                    <button onClick={() => addToCart(item)} className='text-3xl transition-colors duration-500'>
                        <CiCirclePlus />
                    </button>
                </div>
                <div className='text-center pr-6 font-medium'>
                    {(item.price * item.quantity).toFixed(2)} SEK
                </div>
            </div>
        </div>
    );
}

export default CartProduct;
