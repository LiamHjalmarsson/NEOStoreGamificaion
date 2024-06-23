import React from 'react';
import { useCartContext } from '../../context/cartContext';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Image from '../elements/Image';

const ProductCard = ({ url, product }) => {
    let { addToCart } = useCartContext();

    return (
        <div className='relative p-4 lg:p-6 flex flex-col justify-center items-center group w-64 xl:w-80'>
            <div className='absolute top-0 bg-stone-200 z-10 dark:bg-stone-800 p-4 font-semibold bg-opacity-80'>
                {product.title}
            </div>
            <Link to={"/products/" + product.title}>
                <Image img={product.image} />
            </Link>
            <div className='group bg-stone-200 dark:bg-stone-800 w-full  py-4 px-8 bg-opacity-80'>
                <p className='text-sm mb-2'>
                    {product.title}
                </p>
                <div className='flex'>
                    <p className='font-bold flex-grow'>
                        ${product.price} SEK
                    </p>
                    <div className='bg-green-500 p-2 rounded-full hover:bg-green-600 transition duration-300 cursor-pointer' onClick={() => addToCart(product)}>
                        <FaCartPlus />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
