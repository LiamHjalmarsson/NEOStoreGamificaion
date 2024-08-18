import React from 'react';
import { Link } from 'react-router-dom';
import { firstLetter } from '../../../utils/textTransformation';

const HeroItem = ({ item }) => {
    return (
        <Link to={`/products/${item.title}`} className='w-full md:w-1/2 h-1/2 md:h-full group relative cursor-pointer'>
            <img src={item.image} className='object-cover object-center w-full h-full transition duration-500' />
            <div className='absolute w-full h-full flex flex-col justify-end gap-4 top-0 p-6 lg:p-12 transition duration-500 text-stone-200 bg-stone-800 bg-opacity-40 group-hover:bg-opacity-30 dark:bg-opacity-60 dark:group-hover:bg-opacity-45'>
                <div className='w-fit lg:group-hover:scale-105 transition duration-500'>
                    <h2 className='text-xl 2xl:text-3xl'>
                        New Product
                    </h2>
                    <h1 className='text-2xl 2xl:text-5xl font-semibold text-rose-600'>
                        {firstLetter(item.title)}
                    </h1>
                </div>
            </div>
        </Link>
    );
}

export default HeroItem;
