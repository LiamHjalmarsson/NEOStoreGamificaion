import React from 'react';
import { Link } from 'react-router-dom';

const HeroItem = ({ genderType }) => {
    return (
        <Link to={`/products/${genderType?.title}`} className='w-1/2 h-full bg-stone-800 group relative cursor-pointer'>
            <img src={genderType?.image} className='object-cover object-center opacity-80 w-full h-full group-hover:opacity-60 transition duration-300' />
            <div className='absolute p-12 flex flex-col gap-4 text-white bottom-0 group-hover:scale-110 transition duration-300'>
                <h2 className='text-base lg:text-lg 2xl:text-2xl'>
                    New Product
                </h2>
                <h1 className='text-lg lg:text-2xl 2xl:text-4xl'>
                    {
                        genderType?.title.slice(0, 1).toUpperCase() + genderType?.title.slice(1)
                    }
                </h1>
            </div>
        </Link>
    );
}

export default HeroItem;
