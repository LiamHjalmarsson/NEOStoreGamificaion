import React, { useState } from 'react';
import { useRootContext } from '../../../Root';
import Edith from "./Edith";
import Item from './Item';

const Items = ({ items, path }) => {
    let [edithItem, setEdithItem] = useState(null);
    let { deleteItem } = useRootContext();

    let edithHandler = (item) => {
        if (item._id === edithItem?._id) {
            setEdithItem(null);
        } else {
            setEdithItem(item);
        }
    }

    return (
        <>
            <div className={`grid-cols-2 2xl:grid-cols-4 gap-6 grid justify-center items-center px-4 xl:px-12 pb-12 mt-12`}>
                {items.map((item, index) => (
                    <Item item={item} key={index} openEdith={edithHandler} path={path} />
                ))}
            </div>

            { edithItem && <Edith item={edithItem} close={() => setEdithItem(false)} delete={deleteItem} path={path}/>}
        </>
    );
}

export default Items;
