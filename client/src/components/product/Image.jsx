import React from 'react';
import { Link } from 'react-router-dom';

const Image = ({ product }) => {
    return (
        <>
            <h2 className='absolute -top-4 bg-rose-600 text-stone-100 z-10 p-4  font-bold bg-opacity-90 tracking-wider uppercase line-clamp-1'>
                {product.title}
            </h2>
            <Link to={"/products/" + product.title} className='overflow-hidden w-full h-64'>
                <img src={product.image} className='object-cover object-center w-full h-full opacity-90 hover:opacity-80 hover:scale-110 transition duration-500' />
            </Link>
        </>
    );
}

export default Image;
