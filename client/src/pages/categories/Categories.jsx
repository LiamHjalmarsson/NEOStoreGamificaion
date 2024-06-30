import React from 'react';
import { useRootContext } from '../Root';
import CategoriesContainer from '../../components/category/CategoriesContainer';

const Categories = () => {
    let { categories } = useRootContext();

    return (
        <div className='pt-24'>
            <CategoriesContainer categories={categories} />
        </div>
    );
}

export default Categories;
