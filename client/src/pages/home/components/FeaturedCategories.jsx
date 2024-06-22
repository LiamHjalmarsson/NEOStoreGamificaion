import React from 'react';
import { useRootContext } from '../../Root';
import CategoryCard from '../../../components/category/CategoryCard';

const FeaturedCategories = () => {
    let { categories } = useRootContext();
    let amountOfCategories = categories.slice(0, 6);

    return (
        <>
            <div className='px-12'>
                <h2 className='text-center text-lg lg:text-2xl 2xl:text-4xl font-bold tracking-wider text-stone-800 dark:text-stone-200 mb-4'>
                    Poupulare Categories
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-3 2xl:grid-cols-6 mx-auto p-6 lg:p-12 max-w-8xl gap-2 md:gap-6 lg:gap-12'>
                    {
                        amountOfCategories.map((category, index) => (
                            <CategoryCard category={category} key={index} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default FeaturedCategories;
