import React from 'react';
import ProductCard from '../../../components/product/ProductCard';
import { useRootContext } from '../../Root';
import ItemsContainer from '../../../components/container/itemsContainer';

const FeaturedProducts = () => {
    let { products } = useRootContext();

    let manProducts = products.filter((item) => item.gender.includes("male"));
    let womanProducts = products.filter((item) => item.gender.includes("female"));

    return (
        <>
            <div className='px-12'>
                <h2 className='text-center text-lg lg:text-2xl 2xl:text-4xl font-bold tracking-wider mb-4'>
                    Popular products for men
                </h2>
                <ItemsContainer>
                    {
                        manProducts.map((clothing, index) => (
                            <ProductCard key={index} product={clothing} url={`products/${clothing.title}`} />
                        ))
                    }
                </ItemsContainer>
            </div>

            <div className='px-12'>
                <h2 className='text-center text-lg lg:text-2xl 2xl:text-4xl font-bold tracking-wider mb-4'>
                    Popular products for woman
                </h2>
                <ItemsContainer>
                    {
                        womanProducts.map((clothing, index) => (
                            <ProductCard key={index} product={clothing} url={`products/${clothing.title}`} />
                        ))
                    }
                </ItemsContainer>
            </div>
        </>
    );
}

export default FeaturedProducts;
