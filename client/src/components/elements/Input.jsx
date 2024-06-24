import React from 'react';

const Input = ({ input }) => {
    return (
        <div className={`w-full relative`}>
            <label
                htmlFor={input.id} 
                className='absolute left-4 top-4 invisible'
            >
                {
                    input.name
                }
            </label>
            <input
                {...input}
                className={`p-2 w-full my-4 border-2 border-stone-800 dark:border-stone-200 outline-none shadow-middle shadow-stone-800 rounded-md bg-transparent transition duration-300`}
            />
        </div>
    );
}

export default Input;
