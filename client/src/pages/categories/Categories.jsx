import React from 'react';
import { Link } from 'react-router-dom';
import { useRootContext } from '../Root';
import CategoryCard from '../../components/category/CategoryCard';

const Categories = () => {
    let { categories } = useRootContext();

    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 mx-auto p-6 lg:p-12 max-w-8xl gap-2 md:gap-6 lg:gap-12'>
            {categories.map((category, index) => (
                <CategoryCard key={index} category={category} />
            ))}
        </section>
    );
}

export default Categories;
