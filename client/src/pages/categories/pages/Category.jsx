import React from 'react';
import { useParams } from 'react-router-dom';
import { useRootContext } from '../../Root';
import ProductsContainer from '../../../components/product/Products';

const Category = () => {
    let { id } = useParams();
    let { categories, products } = useRootContext();

    let category = categories.find(category => category.title === id);
    let categoryProducts = products.filter(product => product.category === category._id);

    return (
        <section className='pt-12'>
            <ProductsContainer products={categoryProducts} />
        </section>
    );
}

export default Category;
