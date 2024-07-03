import React, { createContext, useContext, useEffect } from 'react';
import { Outlet, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { useRootContext } from '../Root';
import { fetchData } from '../../utils/customFetch';

let userContext = createContext();

export let userProfileLoader = async ({ params }) => {
    let { id } = params;

    try {
        let { achievements } = await fetchData("achievement");
        let { purchase } = await fetchData(`purchase/${id}`);

        return {
            achievements,
            purchase
        }
    } catch (error) {
        return error
    }
}

const User = () => {
    let { achievements, purchase } = useLoaderData();
    let { user } = useRootContext();
    let { id } = useParams();
    let navigation = useNavigate();

    useEffect(() => {
        if (!user) {
            navigation("/login");
        }

        if (user._id !== id) {
            navigation("/");
        }
    }, []);

    return (
        <userContext.Provider value={{ achievements, purchase }}>
            <Outlet />
        </userContext.Provider>
    );
}

export const useUserContext = () => useContext(userContext);

export default User;