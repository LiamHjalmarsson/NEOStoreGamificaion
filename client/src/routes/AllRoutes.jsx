import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Categories from "../pages/categories/Categories";
import Products from "../pages/products/Products";
import Root, { loader } from "../pages/Root";
import Category from "../pages/categories/pages/Category";
import Product from "../pages/categories/pages/Product";

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
            }
        ]
    }
]);

export default AllRoutes;