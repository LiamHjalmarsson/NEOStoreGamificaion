import { Outlet, useLoaderData } from "react-router-dom";
import { createContext } from "react";
import { useContext } from "react";
import Sidebar from "./components/sidebar/Sidebar";

let dashboardContext = createContext();

export let dashBoardLoader = async () => {
    try {
        let responseStats = await fetch("/api/user/stats");
        let recourseStats = await responseStats.json();

        let responseUsers = await fetch("/api/user");
        let recourse = await responseUsers.json();

        return recourseStats;
    } catch (error) {
        return error;
    }
}

let links = [
    {
        path: "",
        children: [],
    },
    {
        path: "categories",
    },
    {
        path: "products",
        children: [

        ]
    },
    {
        path: "achievements",
    },
    {
        path: "ranks",
    },
    {
        path: "users",
    },
];

const Dashboard = () => {
    let stats = useLoaderData();

    return (
        <dashboardContext.Provider value={{ stats }}>
            <div className='flex relative'>
                <Sidebar links={links} />

                <div className='p-12 h-full flex justify-center grow'>
                    <Outlet />
                </div>
            </div>
        </dashboardContext.Provider>
    );
}

export let useDashboard = () => useContext(dashboardContext);

export default Dashboard;
