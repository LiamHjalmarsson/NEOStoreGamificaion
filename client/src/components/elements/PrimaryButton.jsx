import React from 'react';

const PrimaryButton = ({ onclick, custom, children, type }) => {
    return (
        <button
            className={`${custom ? custom : ""} text-lg py-2 px-8 min-w-32 border-2 flex-grow bg-rose-600 text-stone-200 border-2 border-rose-600 hover:bg-rose-500 border-rose-600 text-center transition duration-500 font-bold`}
            onClick={onclick ? onclick : () => { }}
            type={type ? type : "button"}
        >
            {children}
        </button>
    );
}

export default PrimaryButton;
