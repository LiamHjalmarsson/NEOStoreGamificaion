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
import AuthCategories from "../pages/dashboard/pages/Categories";
import AuthProducts from "../pages/dashboard/pages/Products";
import User from "../pages/user/User";
import Landing from "../pages/user/pages/Landing";
import Benefits from "../pages/user/pages/Benefits";

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

                    },
                    {
                        path: "products",
                        element: <AuthProducts />
                    }
                ]
            },
            {
                path: "user/:id",
                element: <User />,
                children: [
                    {
                        index: true,
                        element: <Landing />
                    },
                    {
                        path: "benefits",
                        element: <Benefits />
                    }
                ]
            }

        ]
    }
]);

export default AllRoutes;