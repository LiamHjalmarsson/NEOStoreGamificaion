import { NavLink } from "react-router-dom";
import Icons from "./components/icons/Icons";
import Links from "./components/links/Links";

const Navigation = () => {
    return (
        <header className='relative w-full'>
            <nav className="flex relative items-center w-full h-[10vh] p-12 justify-between transition-colors duration-300 bg-stone-200 text-stone-800 dark:bg-stone-800 dark:text-stone-200">
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
