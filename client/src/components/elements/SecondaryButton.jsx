import React from 'react';

const SecondaryButton = ({ onclick, custom, children, type }) => {
    return (
        <button
            className={`${custom ? custom : ""} text-lg font-bold py-2 px-8 min-w-32 border-2 flex-grow border-rose-600 text-center transition duration-500 hover:bg-rose-600 text-rose-600  hover:text-stone-200`}
            onClick={onclick ? onclick : () => { }}
            type={type ? type : "button"}
        >
            {children}
        </button>
    );
}

export default SecondaryButton;
