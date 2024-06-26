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
            <div className='px-4 md:px-12'>
                <div className='mx-auto w-fit text-center max-md:mb-6'>
                    <h3 className='mb-2 tracking-wider text-sm lg:text-base 2xl:text-lg font-semibold'>
                        Buy favorites
                    </h3>
                    <h2 className='text-lg lg:text-2xl 2xl:text-4xl font-bold tracking-wider'>
                        Popular with men
                    </h2>
                </div>
                <ItemsContainer>
                    {
                        manProducts.map((clothing, index) => (
                            <ProductCard key={index} product={clothing} url={`products/${clothing.title}`} />
                        ))
                    }
                </ItemsContainer>
            </div>

            <div className='px-4 md:px-12'>
                <div className='mx-auto w-fit text-center max-md:mb-6'>
                    <h3 className='mb-2 tracking-wider text-sm lg:text-base 2xl:text-lg font-semibold'>
                        Buy favorites
                    </h3>
                    <h2 className='text-lg lg:text-2xl 2xl:text-4xl font-bold tracking-wider'>
                        Popular with women
                    </h2>
                </div>
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
