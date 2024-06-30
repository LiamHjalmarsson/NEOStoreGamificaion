import React from 'react';

const Icon = ({ icon, onclick, custom }) => {
    return (
        <div
            onClick={onclick ? onclick : () => { }}
            className={`${custom ? custom : ""} text-xl hover:scale-125 duration-500 transition cursor-pointer`}
        >
            {icon}
        </div>
    );
}

export default Icon;
