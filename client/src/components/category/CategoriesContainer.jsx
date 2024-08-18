import React from 'react';
import CategoryCard from './CategoryCard';

const CategoriesContainer = ({ categories }) => {
    return (
        <div className={`grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-12 xl:gap-6 grid justify-center items-center px-6 xl:px-12 pb-12`}>
            {categories.map((category, index) => (
                <CategoryCard key={index} category={category} />
            ))}
        </div>
    );
}

export default CategoriesContainer;
