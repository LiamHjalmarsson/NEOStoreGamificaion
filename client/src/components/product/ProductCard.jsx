import React from 'react';
import { useCartContext } from '../../context/cartContext';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Image from '../elements/Image';

const ProductCard = ({ url, product }) => {
    let { addToCart } = useCartContext();

    return (
        <div className='relative p-4 lg:p-6 '>
            <Link to={"/products/" + product.title} className='group'>
                <Image img={product.image} />
                <div className='absolute top-0 left-2 bg-stone-200 text-stone-800 dark:bg-stone-800 dark:text-stone-200 p-4 font-semibold bg-opacity-80 shadow-md shadow-stone-800'>
                    {product.title}
                </div>
            </Link>
            <div className='absolute flex justify-center items-center gap-4 group bottom-0 right-2 bg-stone-200 text-stone-800 dark:bg-stone-800 dark:text-stone-200 p-4 font-bold bg-opacity-80 shadow-md tracking-widest shadow-stone-800'>
                Sek {product.price}
                <div className='bg-green-500 p-2 rounded-full group-hover:scale-125 transition duration-300 cursor-pointer' onClick={() => addToCart(product)}>
                    <FaCartPlus />
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
