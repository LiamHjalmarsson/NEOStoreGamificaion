import React from 'react';

const Button = ({ onclick, custom, children, type }) => {
    return (
        <button
            className={`${custom ? custom : ""} text-lg py-2 px-8 min-w-32 border-2 flex-grow border-stone-800 dark:border-indigo-500 text-center transition duration-500 hover:bg-stone-800 hover:text-stone-200 dark:hover:bg-indigo-500 font-bold`}
            onClick={onclick ? onclick : () => { }}
            type={type ? type : "button"}
        >
            {children}
        </button>
    );
}

export default Button;
