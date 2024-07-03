import React, { createContext, useContext } from 'react';
import { Outlet, redirect, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Navigation from '../components/layouts/navigation/Navigation';
import { toast } from 'react-toastify';
import { fetchData } from '../utils/customFetch';

const rootContext = createContext();

export let loader = async () => {
    try {
        let { categories } = await fetchData("category");
        let { products } = await fetchData("product");
        let { user } = await fetchData("user/current-user");
        let { ranks } = await fetchData("rank");

        return {
            categories,
            products,
            user: user || false,
            ranks
        };
    } catch (error) {
        toast.error(error.message);
        return error;
    }
}

const Root = () => {
    let { categories, products, user, ranks } = useLoaderData();
    let navigate = useNavigate();
    let { pathname } = useLocation();

    let logout = async () => {
        navigate("/")
        let rep = await fetch("/api/auth/logout");
        let res = await rep.json();

        toast.success(res.message);
    }

    let deleteItem = async (path) => {
        try {
            let response = await fetch(`/api/${path}`, {
                method: 'DELETE',
            });

            let recourse = await response.json();

            toast.success(recourse.message);
        } catch (error) {
            toast.error(error);
        }
    }

    return (
        <rootContext.Provider value={{ categories, products, user, ranks, logout, deleteItem }}>
            <Navigation />
            <main className='min-h-screen bg-stone-100 text-stone-800 dark:bg-stone-900 dark:text-stone-200 duration-500 transition-colors relative pt-24'>
                <Outlet />
            </main>
        </rootContext.Provider>
    );
}

export const useRootContext = () => useContext(rootContext);

export default Root;
