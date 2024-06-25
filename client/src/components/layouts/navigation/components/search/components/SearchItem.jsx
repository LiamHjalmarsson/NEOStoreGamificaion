import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../../../elements/Image';

const SearchItem = ({ item }) => {
    return (
        <Link to={`/products/${item.title}`} className='p-2 w-full flex items-center gap-12 border border-stone-800 dark:border-stone-200 mt-4 transition duration-300'>
            <div className='flex-grow flex justify-between pr-12'>
                <span className='font-semibold'>
                    {item.title}
                </span>
                <span>
                    {item.price} SEK
                </span>
            </div>
            <div className='w-14'>
                <Image img={item.image} />
            </div>
        </Link>
    );
}

export default SearchItem;
