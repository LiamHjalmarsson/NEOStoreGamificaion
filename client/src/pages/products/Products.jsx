import React from 'react';
import { useRootContext } from '../Root';
import ProductCard from '../../components/product/ProductCard';
import ItemsContainer from '../../components/container/itemsContainer';

const Products = () => {
    let { products } = useRootContext();

    return (
        <ItemsContainer custom='max-w-full'>
            {products.map((product, index) => (
                <ProductCard product={product} index={index} />
            ))}
        </ItemsContainer>
    );
}

export default Products;
