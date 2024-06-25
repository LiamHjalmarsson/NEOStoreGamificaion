import React from 'react';
import { firstLetter } from '../../utils/textTransformation';

const Input = ({ input }) => {
    return (
        <div className={`w-full relative`}>
            <label
                htmlFor={input.id}
                className='pl-2 text-stone-200'
            >
                {firstLetter(input.name)}
            </label>
            <input
                {...input}
                className={`p-2 w-full border-2 border-stone-800 dark:border-stone-200 outline-none shadow-middle shadow-stone-800 rounded-md bg-transparent transition duration-300`}
            />
        </div>
    );
}

export default Input;
