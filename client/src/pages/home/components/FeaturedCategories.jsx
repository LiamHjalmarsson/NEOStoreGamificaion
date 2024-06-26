import React from 'react';
import { useRootContext } from '../../Root';
import CategoryCard from '../../../components/category/CategoryCard';

const FeaturedCategories = () => {
    let { categories } = useRootContext();
    let amountOfCategories = categories.slice(0, 4);

    return (
        <div className='flex flex-col gap-12'>
            <div className='mx-auto w-fit text-center'>
                <h3 className='mb-2 tracking-wider text-sm lg:text-base 2xl:text-lg font-semibold'>
                    Need something
                </h3>
                <h2 className='text-lg lg:text-2xl 2xl:text-4xl font-bold tracking-wider'>
                    Popular Categories
                </h2>
            </div>
            <div className={`flex flex-wrap justify-center items-center`}>
                {
                    amountOfCategories.map((category, index) => (
                        <CategoryCard category={category} key={index} />
                    ))
                }
            </div>
        </div>
    );
}

export default FeaturedCategories;
