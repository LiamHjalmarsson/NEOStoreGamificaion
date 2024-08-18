import React from 'react';
import Copyright from './components/Copyright';
import Links from './components/Links';

const Footer = () => {
    return (
        <footer className="bg-stone-100 dark:bg-stone-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-center">
                <Links />
                <hr className="my-6 sm:mx-auto border-rose-600 lg:my-8" />
                <Copyright />
            </div>
        </footer>
    );
}

export default Footer;
