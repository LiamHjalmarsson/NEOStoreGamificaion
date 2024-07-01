import { Outlet, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { createContext, useEffect } from "react";
import { useContext } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import { IoStatsChart } from "react-icons/io5";
import { FaRankingStar } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";
import { FaTrophy } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { useRootContext } from "../Root";

let dashboardContext = createContext();

export let dashBoardLoader = async () => {
    try {
        let responseStats = await fetch("/api/user/stats");
        let recourseStats = await responseStats.json();

        let responseUsers = await fetch("/api/user");
        let recourse = await responseUsers.json();

        let responseAchievement = await fetch("/api/achievement");
        let recourseAchievement = await responseAchievement.json();

        let responseRank = await fetch("/api/rank");
        let recourseRank = await responseRank.json();

        let responseOrder = await fetch("/api/purchase");
        let recourseOrders = await responseOrder.json();

        return { stats: recourseStats, users: recourse, achievements: recourseAchievement, ranks: recourseRank, orders: recourseOrders };
    } catch (error) {
        return error;
    }
}

let links = [
    {
        path: "",
        icon: <IoStatsChart />
    },
    {
        path: "categories",
        icon: <TbCategoryFilled />
    },
    {
        path: "products",
        icon: <AiOutlineProduct />
    },
    {
        path: "achievements",
        icon: <FaTrophy />
    },
    {
        path: "ranks",
        icon: <FaRankingStar />
    },
    {
        path: "users",
        icon: <HiUsers />
    },
];

const Dashboard = () => {
    let { stats, users, achievements, ranks, orders } = useLoaderData();
    let { user } = useRootContext();

    let { id } = useParams();
    let navigation = useNavigate();

    useEffect(() => {
        if (user.role !== "admin") {
            navigation("/");
        }
    }, []);

    return (
        <dashboardContext.Provider value={{ stats, users, achievements, ranks, orders }}>
            <div className='flex relative pt-12'>
                <Sidebar links={links} />

                <div className='px-12 min-h-[80vh] w-[90vw] flex justify-center grow'>
                    <Outlet />
                </div>
            </div>
        </dashboardContext.Provider>
    );
}

export let useDashboard = () => useContext(dashboardContext);

export default Dashboard;
