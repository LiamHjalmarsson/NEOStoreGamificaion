import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Categories from "../pages/categories/Categories";
import Products from "../pages/products/Products";
import Root, { loader } from "../pages/Root";
import Category from "../pages/categories/pages/Category";
import Product from "../pages/products/pages/Product";
import Cart from "../pages/cart/Cart";
import Login, { loginAction } from "../pages/auth/Login";
import Register, { registerAction } from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";

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
                path: "categories/:id/:id",
                element: <Product />
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
                path: "cart",
                element: <Cart />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            }

        ]
    }
]);

export default AllRoutes;