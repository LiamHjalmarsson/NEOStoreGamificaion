import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../../../elements/Image';
import { firstLetter } from '../../../../../../utils/textTransformation';

const SearchItem = ({ item }) => {
    return (
        <Link to={`/products/${item.title}`} className='p-4 w-full flex items-center gap-6 border-b-2 border-rose-600 text-stone-800 dark:text-stone-200 relative group'>
            <div className='flex-grow flex justify-between items-center'>
                <span className='font-semibold text-lg'>
                    {firstLetter(item.title)}
                </span>
                <span className='text-sm'>
                    {item.price} SEK
                </span>
            </div>
            <div className='w-14 h-14 shadow-sm'>
                <Image img={item.image} alt={item.title} />
            </div>
        </Link>
    );
}

export default SearchItem;
