import React from 'react';
import { FaPlus } from 'react-icons/fa6';

const AddButton = ({ showHandler, show }) => {
    return (
        <button className={` transition duration-500 ${show ? "rotate-45 bg-rose-500" : "rotate-0 bg-blue-500"} p-4 rounded-full text-stone-200 fixed right-6 z-20 bottom-6`} onClick={showHandler}>
            <FaPlus className='text-xl lg:text-2xl' />
        </button>
    );
}

export default AddButton;
