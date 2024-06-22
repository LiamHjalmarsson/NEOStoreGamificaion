import React from 'react';

const Input = ({ input }) => {
    return (
        <div className={`w-full relative`}>
            <label
                htmlFor={input.id}
            >
                {
                    input.title
                }
            </label>
            <input
                {...input}
                className={`p-2 w-full mt-2 border-2 border-primary dark:border-_purple outline-none shadow-middle shadow-primary rounded-md bg-transparent`}
            />
        </div>
    );
}

export default Input;
