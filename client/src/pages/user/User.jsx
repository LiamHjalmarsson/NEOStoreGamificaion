import React, { createContext, useContext, useEffect } from 'react';
import { Outlet, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { useRootContext } from '../Root';
import { fetchData } from '../../utils/customFetch';

let userContext = createContext();

export let userProfileLoader = async () => {
    try {
        let { ranks } = await fetchData("rank");
        let achievements = await fetchData("achievement");
        let { purchase } = await fetchData("purchase");

        return {
            ranks,
            achievements,
        }
    } catch (error) {
        return error
    }
}

const User = () => {
    let { ranks, achievements } = useLoaderData();
    let { user } = useRootContext();
    let { id } = useParams();
    let navigation = useNavigate();

    let upcomingRank = ranks.find(rank => user.totalPointsEarned < rank.unlockAt);

    useEffect(() => {
        if (!user) {
            navigation("/register");
        }

        if (user._id !== id) {
            navigation("/");
        }
    }, []);

    return (
        <userContext.Provider value={{ ranks, achievements, upcomingRank }}>
            <Outlet />
        </userContext.Provider>
    );
}

export const useUserContext = () => useContext(userContext);

export default User;