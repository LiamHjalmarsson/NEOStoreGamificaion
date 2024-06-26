import React from 'react';
import { useParams } from 'react-router-dom';
import { useRootContext } from '../../Root';
import ProductCard from '../../../components/product/ProductCard';
import ItemsContainer from '../../../components/container/itemsContainer';

const Category = () => {
    let { id } = useParams();
    let { categories, products } = useRootContext();

    let category = categories.find(category => category.title === id);
    let categoryProducts = products.filter(product => product.category === category.title);

    return (
        <section className='pt-12'>
            <div className={`grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 xl:gap-12 grid justify-center items-center p-6 xl:p-12`}>
                {categoryProducts.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))}
            </div>
        </section>
    );
}

export default Category;
