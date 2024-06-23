import React from 'react';
import { useRootContext } from '../../Root';
import CategoryCard from '../../../components/category/CategoryCard';
import ItemsContainer from '../../../components/container/itemsContainer';

const FeaturedCategories = () => {
    let { categories } = useRootContext();
    let amountOfCategories = categories.slice(0, 6);

    return (
        <>
            <div className='px-12'>
                <h2 className='text-center text-lg lg:text-2xl 2xl:text-4xl font-bold tracking-wider  mb-4'>
                    Poupulare Categories
                </h2>
                <ItemsContainer custom={"max-w-full"}>
                    {
                        amountOfCategories.map((category, index) => (
                            <CategoryCard category={category} key={index} />
                        ))
                    }
                </ItemsContainer>
            </div>
        </>
    );
}

export default FeaturedCategories;
