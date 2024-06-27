import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Categories from "../pages/categories/Categories";
import Products from "../pages/products/Products";
import Root, { loader } from "../pages/Root";
import Category from "../pages/categories/pages/Category";
import Product from "../pages/products/pages/Product";
import Cart, { cartAction } from "../pages/cart/Cart";
import Login, { loginAction } from "../pages/auth/Login";
import Register, { registerAction } from "../pages/auth/Register";
import Dashboard, { dashBoardLoader } from "../pages/dashboard/Dashboard";
import Stats from "../pages/dashboard/pages/Stats";
import AuthCategories, { addCategoryAction } from "../pages/dashboard/pages/Categories";
import AuthProducts, { addProductAction } from "../pages/dashboard/pages/Products";
import User, { userProfileLoader } from "../pages/user/User";
import Landing from "../pages/user/pages/Landing";
import Benefits from "../pages/user/pages/Benefits";
import Orders from "../pages/user/pages/Orders";
import Achievements from "../pages/user/pages/Achievements";
import Settings, { updateUser } from "../pages/user/pages/Settings";
import AuthAchievements, { addAchievementAction } from "../pages/dashboard/pages/achievements";
import AuthRanks, { addRankAction } from "../pages/dashboard/pages/Ranks";
import AuthUsers from "../pages/dashboard/pages/Users";

const AllRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        loader: loader,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "login",
                element: <Login />,
                action: loginAction,
            },
            {
                path: "register",
                element: <Register />,
                action: registerAction,
            },
            {
                path: "categories",
                element: <Categories />,
            },
            {
                path: "categories/:id",
                element: <Category />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "products/:id",
                element: <Product />
            },
            {
                path: "categories/:id/:id",
                element: <Product />
            },
            {
                path: "cart",
                element: <Cart />,
                action: cartAction
            },
            {
                path: "dashboard",
                element: <Dashboard />,
                loader: dashBoardLoader,
                children: [
                    {
                        index: true,
                        element: <Stats />
                    },
                    {
                        path: "categories",
                        element: <AuthCategories />,
                        action: addCategoryAction
                    },
                    {
                        path: "products",
                        element: <AuthProducts />,
                        action: addProductAction
                    },
                    {
                        path: "achievements",
                        element: <AuthAchievements />,
                        action: addAchievementAction
                    },
                    {
                        path: "ranks",
                        element: <AuthRanks />,
                        action: addRankAction
                    },
                    {
                        path: "users",
                        element: <AuthUsers />
                    }
                ]
            },
            {
                path: "user/:id",
                element: <User />,
                loader: userProfileLoader,
                children: [
                    {
                        index: true,
                        element: <Landing />
                    },
                    {
                        path: "benefits",
                        element: <Benefits />
                    },
                    {
                        path: "orders",
                        element: <Orders />
                    },
                    {
                        path: "achievements",
                        element: <Achievements />
                    },
                    {
                        path: "settings",
                        element: <Settings />,
                        action: updateUser
                    },
                ]
            }
        ]
    },
]);

export default AllRoutes;