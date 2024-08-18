import React from 'react';
import { Link } from 'react-router-dom';
import { firstLetter } from '../../utils/textTransformation';

const CategoryCard = ({ category }) => {
    return (
        <Link to={"/categories/" + category.title} className='flex-grow lg:min-w-64 relative group bg-stone-800 flex justify-center items-center overflow-hidden'>
            <img src={category.image} className='object-cover object-center w-full h-36 md:h-44 lg:h-80 opacity-60 dark:opacity-70 group-hover:opacity-50 duration-500 transition group-hover:scale-110' alt={"no alt"} />
            <div className='absolute text-center text-xl lg:text-4xl p-4 font-bold bg-opacity-80 tracking-wide text-stone-200 z-10 group-hover:scale-110 transition duration-500'>
                {firstLetter(category.title)}
            </div>
        </Link>
    );
}

export default CategoryCard;
