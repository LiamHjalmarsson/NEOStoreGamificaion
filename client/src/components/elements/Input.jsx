import React from 'react';
import { firstLetter } from '../../utils/textTransformation';

const Input = ({ input }) => {
    return (
        <div className={`w-full flex relative`}>
            <label
                htmlFor={input.id}
                className=' absolute -top-3 left-4 bg-stone-200 dark:bg-stone-800 px-2'
            >
                {firstLetter(input.id)}
            </label>
            <input
                {...input}
                className={`pl-4 p-2 w-full border-2 border-stone-800 dark:border-stone-200 outline-none shadow-middle shadow-stone-800 rounded-md bg-transparent transition duration-300`}
            />
        </div>
    );
}

export default Input;
