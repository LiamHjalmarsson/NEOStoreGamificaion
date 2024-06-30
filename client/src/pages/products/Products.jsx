import React from 'react';
import { useRootContext } from '../Root';
import ProductsContainer from '../../components/product/Products';

const Products = () => {
    let { products } = useRootContext();

    return (
        <section className='pt-12'>
            <ProductsContainer products={products} />
        </section>
    );
}

export default Products;
