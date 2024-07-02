import React, { createContext, useContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navigation from '../components/layouts/navigation/Navigation';
import { toast } from 'react-toastify';
import { fetchData } from '../utils/customFetch';

const rootContext = createContext();

export let loader = async () => {
    try {
        let { categories } = await fetchData("category");
        let { products } = await fetchData("product");
        let { user } = await fetchData("user/current-user");
        let { achievements } = await fetchData("achievement");
        let { ranks } = await fetchData("rank");

        return {
            categories,
            products,
            user: user || false,
            achievements,
            ranks
        };
    } catch (error) {
        return error;
    }
}

const Root = () => {
    let { categories, products, user, achievements, ranks } = useLoaderData();

    let logout = async (e) => {
        await fetch("/api/auth/logout");
    }

    let deleteItem = async (path) => {
        try {
            let response = await fetch(`/api/${path}`, {
                method: 'DELETE',
            });

            console.log(response);

            await response.json();

            toast.success("Item was deleted successfully");
        } catch (error) {
            toast.error(error);
        }
    }

    return (
        <rootContext.Provider value={{ categories, products, user, achievements, ranks, logout, deleteItem }}>
            <Navigation />
            <main className='min-h-screen bg-stone-100 text-stone-800 dark:bg-stone-900 dark:text-stone-200 duration-500 transition-colors relative pt-24'>
                <Outlet />
            </main>
        </rootContext.Provider>
    );
}

export const useRootContext = () => useContext(rootContext);

export default Root;
