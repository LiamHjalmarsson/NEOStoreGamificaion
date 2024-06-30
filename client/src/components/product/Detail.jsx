import React from 'react';
import { useCartContext } from '../../context/cartContext';
import { FaCartPlus } from 'react-icons/fa';

const Detail = ({ product }) => {
    let { addToCart } = useCartContext();

    return (
        <div className='w-full p-6 bg-opacity-80 bg-stone-100 dark:bg-stone-800'>
            <div className='flex items-center'>
                <p className='font-semibold text-lg flex-grow'>
                    ${product.price} SEK
                </p>
                <div className='flex items-center gap-4 overflow-hidden group cursor-pointer' onClick={() => addToCart(product)}>
                    <span className=' group-hover:translate-x-0 -translate-x-24 duration-300 font-semibold transition-transform text-rose-500'>
                        Add to cart
                    </span>
                    <FaCartPlus className='text-2xl h-10 w-10 p-2 bg-rose-500 rounded-full text-stone-200' />
                </div>
            </div>
        </div>
    );
}

export default Detail;
