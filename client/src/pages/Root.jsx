import React, { createContext, useContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navigation from '../components/layouts/navigation/Navigation';

const rootContext = createContext();

export let loader = async () => {
    try {
        let responseCategory = await fetch("/api/category");
        let responsesProducts = await fetch("/api/product");
        let responsesUser = await fetch("/api/user/current-user");

        let recourseCategory = await responseCategory.json();
        let recourseProducts = await responsesProducts.json();
        let recourseUser = await responsesUser.json();

        console.log(recourseUser);
        console.log(recourseCategory);
        console.log(recourseProducts);

        return {
            categories: recourseCategory.categories,
            products: recourseProducts.products
        };
    } catch (error) {
        return error;
    }
}

const Root = () => {
    let { categories, products } = useLoaderData();

    return (
        <rootContext.Provider value={{ categories, products }}>
            <Navigation />

            <main className='min-h-[90vh] bg-stone-100 dark:bg-stone-700 text-stone-800 dark:text-stone-200 duration-300 transition-colors'>
                <Outlet />
            </main>

        </rootContext.Provider>
    );
}

export const useRootContext = () => useContext(rootContext);

export default Root;
