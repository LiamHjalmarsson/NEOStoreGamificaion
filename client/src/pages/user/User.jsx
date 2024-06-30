import React, { createContext, useContext, useEffect } from 'react';
import { Outlet, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { useRootContext } from '../Root';

let userContext = createContext();

export let userProfileLoader = async () => {
    try {
        let responseRank = await fetch("/api/rank");
        let recourseRank = await responseRank.json();
        let responseAchievement = await fetch("/api/achievement");
        let recourseAchievement = await responseAchievement.json();

        return {
            ranks: recourseRank,
            achievements: recourseAchievement
        }
    } catch (error) {
        return error
    }
}

const User = () => {
    let { ranks } = useLoaderData();
    let { user } = useRootContext();
    let { id } = useParams();
    let navigation = useNavigate();

    useEffect(() => {
        if (!user) {
            navigation("/register");
        }

        if (user._id !== id) {
            navigation("/");
        }
    }, []);

    return (
        <userContext.Provider value={{ ranks }}>
            <Outlet />
        </userContext.Provider>
    );
}

export const useUserContext = () => useContext(userContext);

export default User;