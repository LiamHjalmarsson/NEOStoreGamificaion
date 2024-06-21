import React from 'react';
import { Link } from 'react-router-dom';
import { useCategoryContext } from '../Root';

const Categories = () => {
    let { categories } = useCategoryContext();

    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 mx-auto p-6 lg:p-12 max-w-8xl gap-2 md:gap-6 lg:gap-12'>
            {categories.map((category, index) => (
                <Link to={"/categories/" + category.title} key={index} className='p-4 lg:p-6 relative group'>
                    <div className='overflow-hidden '>
                        <img src={category.image} className='object-contain object-center group-hover:scale-125 transition duration-300 group-hover:opacity-80' />
                    </div>
                    <div className=' absolute top-0 left-2 bg-stone-100 text-stone-800 p-4 font-semibold bg-opacity-80 shadow-md shadow-stone-800'>
                        {category.title}
                    </div>
                </Link>
            ))}
        </section>
    );
}

export default Categories;
