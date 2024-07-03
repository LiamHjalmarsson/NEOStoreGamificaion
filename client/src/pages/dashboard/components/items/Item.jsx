import React from 'react';
import { FaPen } from 'react-icons/fa';
import { FaTrashCan } from 'react-icons/fa6';
import { firstLetter } from '../../../../utils/textTransformation';
import { useRootContext } from '../../../Root';

const Item = ({ item, openEdith }) => {
    let { deleteItem } = useRootContext();

    return (
        <div className='relative'>
            <div className='absolute top-4 right-4 p-4 z-10 rounded-full bg-blue-500 hover:bg-blue-400 transition-colors duration-300 text-stone-200 cursor-pointer' onClick={() => openEdith(item)}>
                <FaPen />
            </div>
            <div className='absolute top-4 left-4 p-4 z-10 rounded-full bg-red-500 hover:bg-red-400 transition-colors duration-300 text-stone-200 cursor-pointer' onClick={() => deleteItem(`${path}/${item._id}`)}>
                <FaTrashCan />
            </div>
            <div className='flex-grow min-w-64 relative group bg-stone-800 flex justify-center h-72 items-center overflow-hidden rounded-3xl'>
                {item.image && <img src={item.image} className='object-cover object-center w-full h-full     opacity-70 group-hover:opacity-50 duration-500 transition group-hover:scale-110' alt={"no alt"} /> }
                <div className='absolute text-center text-2xl lg:text:4xl 2xl:text-5xl p-4 font-semibold bg-opacity-80 tracking-wide text-stone-200 z-10 group-hover:scale-125 transition duration-500'>
                    {firstLetter(item.title)}
                </div>
            </div>
        </div>
    );
}

export default Item;
