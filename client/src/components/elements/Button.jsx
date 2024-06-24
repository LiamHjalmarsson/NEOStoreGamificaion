import React from 'react';

const Button = ({ onclick, custom, children}) => {
    return (
        <button className={`${custom ? custom : ""}
            p-2 border-stone-800 dark:border-stone-200 border-2 px-8 py-4 text-center font-semibold uppercase 
            hover:bg-stone-800 dark:hover:bg-stone-200 hover:text-stone-200 dark:hover:text-stone-800 text-stone-800 dark:text-stone-200 transition-colors duration-300 flex-grow`}
            onClick={onclick  ? onclick : () => {}}
        >
            {children}
        </button>
    );
}

export default Button;
