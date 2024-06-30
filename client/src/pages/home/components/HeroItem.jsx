import React from 'react';
import { Link } from 'react-router-dom';

const HeroItem = ({ item }) => {
    return (
        <Link to={`/products/${item.title}`} className='w-full md:w-1/2 h-1/2 md:h-full group relative cursor-pointer'>
            <img src={item?.image} className='object-cover object-center w-full h-full transition duration-500' />
            <div className='absolute w-full h-full flex flex-col justify-end gap-4 top-0 p-24 transition duration-500 text-stone-200 bg-stone-800 bg-opacity-60 group-hover:bg-opacity-45'>
                <div className=' w-fit  border-b-2 border-stone-200 group-hover:scale-110 transition duration-500'>
                    <h2 className='text-base lg:text-xl 2xl:text-3xl'>
                        New Product
                    </h2>
                    <h1 className='text-xl lg:text-3xl 2xl:text-5xl font-semibold'>
                        {
                            item.title.slice(0, 1).toUpperCase() + item.title.slice(1)
                        }
                    </h1>
                </div>
            </div>
        </Link>
    );
}

export default HeroItem;
