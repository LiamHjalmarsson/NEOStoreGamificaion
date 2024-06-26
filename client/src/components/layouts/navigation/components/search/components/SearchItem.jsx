import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../../../elements/Image';

const SearchItem = ({ item }) => {
    return (
        <Link to={`/products/${item.title}`} className='p-2 w-full flex items-center gap-4 border border-stone-400 shadow dark:border-stone-600 relative rounded-md transition duration-300'>
            <div className='flex-grow flex justify-between items-center'>
                <span className='font-semibold text-lg'>
                    {item.title}
                </span>
                <span className='text-sm'>
                    {item.price} SEK
                </span>
            </div>
            <div className='w-14 shadow shadow-stone-400'>
                <Image img={item.image} alt={item.title} />
            </div>
        </Link>
    );
}

export default SearchItem;
