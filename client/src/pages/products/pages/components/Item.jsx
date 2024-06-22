import React from 'react';

const Item = ({ item }) => {
    return (
        <li
            className={`
                py-2 px-6 border-stone-800 dark:border-stone-200 border-2 text-center font-semibold uppercase 
                hover:bg-stone-800 hover:text-stone-200 dark:hover:bg-stone-200 dark:hover:text-stone-800 transition-colors duration-300`
            }>
            {item}
        </li>
    );
}

export default Item;
