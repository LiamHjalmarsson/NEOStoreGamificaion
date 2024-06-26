import React from 'react';
import { useRootContext } from '../Root';
import CategoryCard from '../../components/category/CategoryCard';
import { firstLetter } from '../../utils/textTransformation';
import LinkButton from '../../components/elements/LinkButton';

const Categories = () => {
    let { categories } = useRootContext();

    return (
        <>
            <div className='mx-auto max-w-7xl flex flex-wrap items-center justify-center gap-6 p-12'>
                {
                    categories.map((category, index) => (
                        <LinkButton href={`/categories/${category.title}`} key={index}>
                            {firstLetter(category.title)}
                        </LinkButton>
                    ))
                }
            </div>
            <div className={`grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 xl:gap-12 grid justify-center items-center px-6 xl:px-12 pb-12`}>
                {categories.map((category, index) => (
                    <CategoryCard key={index} category={category} />
                ))}
            </div>
        </>
    );
}

export default Categories;
