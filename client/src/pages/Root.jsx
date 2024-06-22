import React, { createContext, useContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navigation from '../components/layouts/navigation/Navigation';
import Footer from '../components/layouts/footer/Footer';

const rootContext = createContext();

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
    let { categories, products } = useLoaderData();

    return (
        <rootContext.Provider value={{ categories, products }}>
            <Navigation />

            <main className='min-h-[85vh] bg-stone-100 dark:bg-stone-700 duration-300 transition-colors'>
                <Outlet />
            </main>

            <Footer />
        </rootContext.Provider>
    );
}

export const useRootContext = () => useContext(rootContext);

export default Root;
