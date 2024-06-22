import React from 'react';
import { useRootContext } from '../Root';
import ProductCard from '../../components/product/ProductCard';

const Products = () => {
    let { products } = useRootContext();

    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 mx-auto p-6 lg:p-12 max-w-8xl gap-2 md:gap-6 lg:gap-12'>
            {products.map((product, index) => (
                <ProductCard product={product} index={index} />
            ))}
        </section>
    );
}

export default Products;
