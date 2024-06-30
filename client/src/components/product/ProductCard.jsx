import React from 'react';
import { useCartContext } from '../../context/cartContext';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    let { addToCart } = useCartContext();

    return (
        <div className='relative min-w-56 mx-auto flex flex-col justify-center items-center group max-w-xl w-full shadow-sm'>
            <div className='absolute -top-4 bg-stone-200 z-10 dark:bg-stone-800 p-4 text-lg font-bold bg-opacity-90 tracking-wider uppercase line-clamp-1'>
                <h2>
                    {product.title}
                </h2>
            </div>
            <Link to={"/products/" + product.title} className='overflow-hidden w-full h-96'>
                <img src={product.image} className='object-cover object-center w-full h-full opacity-90 group-hover:opacity-80 group-hover:scale-110 transition duration-500' />
            </Link>
            <div className='group w-full p-8 bg-opacity-80'>
                <div className='flex items-center'>
                    <p className='font-semibold text-lg flex-grow'>
                        ${product.price} SEK
                    </p>
                    <FaCartPlus className='transition duration-500 cursor-pointer hover:scale-110 text-xl' onClick={() => addToCart(product)} />
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
