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
import { fetchData } from "../../utils/customFetch";

let dashboardContext = createContext();

export let dashBoardLoader = async () => {
    try {
        let stats = await fetchData("user/stats");
        let { users } = await fetchData("user");
        let { achievements } = await fetchData("achievement");
        let { ranks } = await fetchData("rank");
        let { purchase } = await fetchData("purchase");

        return { stats, users, achievements, ranks, orders: purchase };
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
            <div className='flex max-lg:flex-col relative pt-32'>
                <Sidebar links={links} />

                <div className='lg:px-12 min-h-[80vh] w-full lg:w-[90vw] flex justify-center grow'>
                    <Outlet />
                </div>
            </div>
        </dashboardContext.Provider>
    );
}

export let useDashboard = () => useContext(dashboardContext);

export default Dashboard;
