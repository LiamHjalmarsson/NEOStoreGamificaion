import React from 'react';
import { Link } from 'react-router-dom';
import Detail from './Detail';

const ProductCard = ({ product }) => {
    return (
        <div className='relative min-w-56 mx-auto flex flex-col justify-center items-center max-w-lg w-full shadow-md'>
            <div className='absolute -top-4 bg-rose-600 text-stone-100 z-10 p-4 text-lg font-bold bg-opacity-90 tracking-wider uppercase line-clamp-1'>
                <h2>
                    {product.title}
                </h2>
            </div>
            <Link to={"/products/" + product.title} className='overflow-hidden w-full h-72'>
                <img src={product.image} className='object-cover object-center w-full h-full opacity-90 hover:opacity-80 hover:scale-110 transition duration-500' />
            </Link>

            <Detail product={product} />
        </div>
    );
}

export default ProductCard;
