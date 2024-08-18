import React from 'react';
import { Form as RouterForm } from 'react-router-dom';
import PrimaryButton from '../elements/PrimaryButton';
import SecondaryButton from '../elements/SecondaryButton';

const Form = ({ children, action, method, button = "Submit", enctype = true }) => {
    return (
        <RouterForm action={action} method={method} encType={enctype ? "multipart/form-data" : ""} className='p-4 lg:p-8 bg-stone-200 dark:bg-stone-700 flex flex-col gap-4 lg:gap-8 justify-center items-center max-w-2xl w-full mx-auto transition duration-500'>
            {children}
            <div className='flex gap-8 w-full'>
                <SecondaryButton type="button">
                    Clear
                </SecondaryButton>
                <PrimaryButton type="submit">
                    {button}
                </PrimaryButton>
            </div>
        </RouterForm>
    );
}

export default Form;
