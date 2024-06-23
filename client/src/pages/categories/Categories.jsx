import React from 'react';
import { useRootContext } from '../Root';
import CategoryCard from '../../components/category/CategoryCard';
import ItemsContainer from '../../components/container/itemsContainer';

const Categories = () => {
    let { categories } = useRootContext();

    return (
        <ItemsContainer custom='max-w-full'>
            {categories.map((category, index) => (
                <CategoryCard key={index} category={category} />
            ))}
        </ItemsContainer>
    );
}

export default Categories;
