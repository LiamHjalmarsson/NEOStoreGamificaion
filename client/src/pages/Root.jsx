import React, { createContext, useContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navigation from '../components/layouts/navigation/Navigation';

const categoriesContext = createContext();

export let loader = async () => {
    try {
        let responseCategory = await fetch("/api/category");
        let responsesProducts = await fetch("/api/product");

        let recourseCategory = await responseCategory.json();
        let recourseProducts = await responsesProducts.json();

        return {
            categories: recourseCategory.categories, 
            products: recourseProducts.products
        };
    } catch (error) {
        return error;
    }
}

const Root = () => {
    let { categories, products} = useLoaderData();

    return (
        <>
            <Navigation />

            <categoriesContext.Provider value={{ categories, products }}>
                <main className='min-h-[90vh] bg-stone-100 dark:bg-stone-700 duration-300 transition-colors'>
                    <Outlet />
                </main>
            </categoriesContext.Provider>

        </>
    );
}

export const useCategoryContext = () => useContext(categoriesContext);

export default Root;
