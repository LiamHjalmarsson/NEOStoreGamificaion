import React from 'react';
import CategoryCard from './CategoryCard';

const CategoriesContainer = ({ categories }) => {
    return (
        <div className={`grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 xl:gap-12 grid justify-center items-center px-6 xl:px-12 pb-12`}>
            {categories.map((category, index) => (
                <CategoryCard key={index} category={category} />
            ))}
        </div>
    );
}

export default CategoriesContainer;
