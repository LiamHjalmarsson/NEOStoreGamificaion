import React from 'react';
import { FaPlus } from 'react-icons/fa6';

const AddButton = ({ showHandler, show }) => {
    return (
        <button className={` transition duration-500 ${show ? "rotate-45 bg-rose-500" : "rotate-0 bg-blue-500"} p-4 rounded-full  text-stone-200 absolute right-12 z-20 bottom-0`} onClick={showHandler}>
            <FaPlus className='text-4xl' />
        </button>
    );
}

export default AddButton;
