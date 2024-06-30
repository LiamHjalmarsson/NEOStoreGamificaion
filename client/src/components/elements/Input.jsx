import React from 'react';
import { firstLetter } from '../../utils/textTransformation';

const Input = ({ input, custom, error }) => {
    return (
        <div className={`w-full flex relative flex-col`}>
            <label
                htmlFor={input.id}
                className=' absolute -top-3 left-4 bg-stone-200 dark:bg-stone-800 px-2'
            >
                {firstLetter(input.id)}
            </label>
            <input
                {...input}
                className={`${error ? "border-red-400" : "border-stone-800 dark:border-stone-200"} pl-4 p-2 w-full border-2  outline-none shadow-middle shadow-stone-800 rounded-md bg-transparent transition duration-500`}
            />
            {error && (
                <p className='text-center mt-2'>
                    {error}
                </p>
            )}
        </div>
    );
}

export default Input;
