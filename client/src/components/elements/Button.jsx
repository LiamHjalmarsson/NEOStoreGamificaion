import React from 'react';

const Button = ({ onclick, custom, children}) => {
    return (
        <button className={`${custom ? custom : ""}
            p-2 border-green-500 border-2 px-8 py-4 text-center font-semibold uppercase 
            hover:bg-green-500 hover:text-stone-200 text-green-500 transition-colors duration-300`}
            onClick={onclick  ? onclick : () => {}}
        >
            {children}
        </button>
    );
}

export default Button;
