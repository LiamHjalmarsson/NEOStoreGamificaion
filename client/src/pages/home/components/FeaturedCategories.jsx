import React from 'react';
import { useRootContext } from '../../Root';
import CategoryCard from '../../../components/category/CategoryCard';
import Headings from '../../../components/heading/Headings';

const FeaturedCategories = () => {
    let { categories } = useRootContext();
    let amountOfCategories = categories.slice(0, 4);

    return (
        <div className='flex flex-col gap-12'>
            <Headings subHeading="Need something" heading="Our Popular Categories" />

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
