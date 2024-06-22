import React from 'react';
import ProductCard from '../../../components/product/ProductCard';
import { useRootContext } from '../../Root';

const FeaturedProducts = () => {
    let { products } = useRootContext();

    let manProducts = products.filter((item) => item.gender.includes("male"));
    let womanProducts = products.filter((item) => item.gender.includes("female"));

    return (
        <>
            <div className='px-12'>
                <h2 className='text-center text-lg lg:text-2xl 2xl:text-4xl font-bold tracking-wider text-stone-800 dark:text-stone-200 mb-6'>
                    Poupulare products for men
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 mx-auto p-6 lg:p-12 max-w-8xl gap-2 md:gap-6 lg:gap-12'>
                    {
                        manProducts.map((clothing, index) => (
                            <ProductCard key={index} product={clothing} url={`products/${clothing.title}`} />
                        ))
                    }
                </div>
            </div>

            <div className='px-12'>
                <h2 className='text-center text-lg lg:text-2xl 2xl:text-4xl font-bold tracking-wider text-stone-800 dark:text-stone-200 mb-4 mb-6'>
                    Poupulare products for woman
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 mx-auto p-6 lg:p-12 max-w-8xl gap-2 md:gap-6 lg:gap-12'>
                    {
                        womanProducts.map((clothing, index) => (
                            <ProductCard key={index} product={clothing} url={`products/${clothing.title}`} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default FeaturedProducts;
