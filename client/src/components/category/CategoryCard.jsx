import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    return (
        <Link to={"/categories/" + category.title} className='p-4 lg:p-6 relative group w-64'>
            <div className='overflow-hidden '>
                <img src={category.image} className='object-contain object-center group-hover:scale-125 transition duration-300 group-hover:opacity-80' />
            </div>
            <div className=' absolute top-0 left-2 bg-stone-200  dark:bg-stone-800  p-4 font-semibold bg-opacity-80 '>
                {category.title}
            </div>
        </Link>
    );
}

export default CategoryCard;
