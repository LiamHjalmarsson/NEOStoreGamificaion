import React from 'react';

const Item = ({ item, selected, onclick }) => {
    return (
        <li
            className={`
                ${selected ? "bg-stone-200 dark:bg-stone-800 text-stone-800 dar:text-stone-200" : ""}
                py-2 px-6 border-stone-800 dark:border-indigo-500 border-2 text-center font-semibold uppercase cursor-pointer
                hover:bg-stone-800 hover:text-indigo-200 dark:hover:bg-indigo-500 dark:hover:text-stone-200 transition-colors duration-300`
            }
            onclick={onclick ? onclick : () => {}}
        >
            {item}
        </li>
    );
}

export default Item;
