import React from 'react';
import { Link } from 'react-router-dom';

const HeroItem = ({ genderType }) => {
    return (
        <Link to={`/products/${genderType?.title}`} className='w-full md:w-1/2 h-1/2 md:h-full group relative cursor-pointer bg-stone-800'>
            <img src={genderType?.image} className='object-cover object-center opacity-50 w-full h-full group-hover:opacity-70 transition duration-300' />
            <div className='absolute p-16 flex flex-col gap-4 bottom-0 group-hover:scale-110 transition duration-300 text-stone-200'>
                <div className='pb-4 border-b-2 border-stone-200'>
                    <h2 className='text-base lg:text-xl 2xl:text-3xl'>
                        New Product
                    </h2>
                    <h1 className='text-xl lg:text-3xl 2xl:text-5xl font-semibold'>
                        {
                            genderType?.title.slice(0, 1).toUpperCase() + genderType?.title.slice(1)
                        }
                    </h1>
                </div>
            </div>
        </Link>
    );
}

export default HeroItem;
