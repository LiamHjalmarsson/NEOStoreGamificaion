import React from 'react';
import { firstLetter } from '../../utils/textTransformation';

const Input = ({ input, custom, error, textarea = false }) => {
    return (
        <div className={`${custom ? custom : ""} grow flex relative flex-col max-w-md mx-auto`}>
            <label
                htmlFor={input.id}
                className='absolute -top-3 left-4 bg-stone-200 dark:bg-stone-700 px-2 duration-500 transition-colors'
            >
                {firstLetter(input.id)}
            </label>
            {
                !textarea && (
                    <input
                        {...input}
                        className={`${error ? "border-red-400" : "border-stone-800 dark:border-stone-200"} pl-4 p-2 w-full border-2 outline-none shadow-middle shadow-stone-800 rounded-md bg-transparent transition-colors duration-500`}
                    />
                ) || (
                    <textarea
                        {...input}

                        className={`${error ? "border-red-400" : "border-stone-800 dark:border-stone-200"} pl-4 p-2 w-full border-2 outline-none shadow-middle shadow-stone-800 rounded-md bg-transparent transition-colors duration-500`}
                    />
                )
            }
            {error && (
                <p className='text-center mt-2'>
                    {error}
                </p>
            )}
        </div>
    );
}

export default Input;
