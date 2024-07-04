import React from 'react';
import Copyright from './components/Copyright';
import Links from './components/Links';

const Footer = () => {
    return (
        <footer className="bg-stone-200 pt-6 shadow dark:bg-stone-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <Links />
                <hr className="my-6 sm:mx-auto border-rose-600 lg:my-8" />
                <Copyright />
            </div>
        </footer>
    );
}

export default Footer;
