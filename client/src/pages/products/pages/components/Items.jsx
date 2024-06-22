import React from 'react';
import Item from './Item';

const items = ({ title, items }) => {
    return (
        <>
            <h2>
                { title }
            </h2>
            <ul className='flex flex-wrap w-full gap-4 mt-1'>
                {
                    items.map((item, index) => (
                        <Item item={item} key={index}/>
                    ))
                }
            </ul>
        </>
    );
}

export default items;
