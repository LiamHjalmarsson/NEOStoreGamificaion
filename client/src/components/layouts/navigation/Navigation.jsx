import { NavLink } from "react-router-dom";
import Icons from "./components/icons/Icons";
import Links from "./components/links/Links";

const Navigation = () => {
    return (
        <header className='relative w-full'>
            <nav className="flex items-center w-full p-12 transition-colors duration-500 bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-100">
                <NavLink to="/" className="text-4xl font-semibold tracking-wider">
                    N-E-O
                </NavLink>

                <Links />

                <Icons />
            </nav >
        </header >
    );
}


export default Navigation;
