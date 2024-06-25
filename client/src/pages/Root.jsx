import React, { createContext, useContext } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import Navigation from '../components/layouts/navigation/Navigation';

const rootContext = createContext();

export let loader = async () => {
    try {
        let responseCategory = await fetch("/api/category");
        let responsesProducts = await fetch("/api/product");

        let responseUser = await fetch("/api/user/current-user");

        let recourseCategory = await responseCategory.json();
        let recourseProducts = await responsesProducts.json();
        let recourseUser = await responseUser.json();

        return {
            categories: recourseCategory.categories,
            products: recourseProducts.products,
            user: recourseUser.user || false
        };
    } catch (error) {
        return error;
    }
}

const Root = () => {
    let { categories, products, user } = useLoaderData();
    let navigate = useNavigate();

    let logout = async (e) => {
        navigate("/");
        
        await fetch("/api/auth/logout");
    }

    return (
        <rootContext.Provider value={{ categories, products, user, logout }}>
            <Navigation />

            <main className='min-h-[90vh] bg-stone-100 dark:bg-stone-700 text-stone-800 dark:text-stone-200 duration-300 transition-colors relative'>
                <Outlet />
            </main>

        </rootContext.Provider>
    );
}

export const useRootContext = () => useContext(rootContext);

export default Root;
