import React from 'react';
import Item from './Item';

const items = ({ title, items, selected, onclick }) => {
    return (
        <>
            <h2>
                { title }
            </h2>
            <ul className='flex flex-wrap w-full gap-4 mt-1'>
                {
                    items.map((item, index) => (
                        <Item item={item} key={index} selected={selected} onclick={onclick} />
                    ))
                }
            </ul>
        </>
    );
}

export default items;
