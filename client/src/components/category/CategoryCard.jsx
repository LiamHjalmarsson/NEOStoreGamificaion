import React from 'react';
import { Link } from 'react-router-dom';
import { firstLetter } from '../../utils/textTransformation';

const CategoryCard = ({ category }) => {
    return (
        <Link to={"/categories/" + category.title} className='flex-grow min-w-64 relative group h-96 2xl:h-[500px] bg-stone-800 flex justify-center items-center overflow-hidden'>
            <img src={category.image} className='object-cover object-center w-full h-full absolute opacity-70 group-hover:opacity-50 duration-500 transition group-hover:scale-110' alt={"no alt"} />
            <div className='text-center text-2xl lg:text:4xl 2xl:text-5xl p-4 font-semibold bg-opacity-80 tracking-wide text-stone-200 relative z-10 group-hover:scale-125 transition duration-300'>
                {firstLetter(category.title)}
            </div>
        </Link>
    );
}

export default CategoryCard;
