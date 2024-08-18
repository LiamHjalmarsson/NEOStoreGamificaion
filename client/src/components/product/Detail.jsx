import React from 'react';
import { useCartContext } from '../../context/cartContext';
import { FaBaseball, FaBasketShopping } from 'react-icons/fa6';

const Detail = ({ product }) => {
    let { addToCart } = useCartContext();

    return (
        <div className='w-full p-4 lg:p-6 bg-opacity-80 bg-stone-100 dark:bg-stone-800 transition-colors duration-500'>
            <div className='flex items-center'>
                <p className='font-semibold text-base lg:text-lg flex-grow'>
                    {product.price} SEK
                </p>
                <div className='flex items-center gap-4 overflow-hidden group cursor-pointer' onClick={() => addToCart(product)}>
                    <span className=' group-hover:translate-x-0 -translate-x-24 duration-300 font-semibold transition-transform text-rose-600'>
                        Add to cart
                    </span>
                    <FaBasketShopping className='text-xl lg:text-2xl rounded-full text-rose-600' />
                </div>
            </div>
        </div>
    );
}

export default Detail;
