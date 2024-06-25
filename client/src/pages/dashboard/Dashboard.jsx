import { Outlet, useLoaderData } from "react-router-dom";
import { createContext } from "react";
import { useContext } from "react";
import Sidebar from "./components/sidebar/Sidebar";

let dashboardContext = createContext();

export let dashBoardLoader = async () => {
    try {
        let response = await fetch("/api/user/stats");

        let recourse = await response.json();

        return recourse;
    } catch (error) {
        return error;
    }
}

let links = [
    {
        path: "",
        children: []
    },
    {
        path: "categories",
        children: [
            {
                path: "All"
            },
            {
                path: "Add"
            }
        ]
    },
    {
        path: "products",
        children: [

        ]
    },
];

const Dashboard = () => {
    let { stats } = useLoaderData();

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
