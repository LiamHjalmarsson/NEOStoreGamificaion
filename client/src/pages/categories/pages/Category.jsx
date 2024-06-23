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
        <section>
            <ItemsContainer custom='max-w-full'>
                {categoryProducts.map((product, index) => (
                    <ProductCard product={product} key={index} />
                    // <Link to={"/categories/" + id + "/" + product.title} key={index} className='p-4 lg:p-6 relative group'>
                ))}
            </ItemsContainer>
        </section>
    );
}

export default Category;
