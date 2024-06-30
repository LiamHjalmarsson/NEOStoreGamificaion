import React from 'react';
import ProductCard from './ProductCard';
import ItemsContainer from '../container/itemsContainer';

const Products = ({ products }) => {
    return (
        <ItemsContainer>
            {
                products.map((product, index) => (
                    <ProductCard key={index} product={product} url={`products/${product.title}`} />
                ))
            }
        </ItemsContainer>
    );
}

export default Products;
