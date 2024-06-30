import React from 'react';
import { Form as RouterForm } from 'react-router-dom';
import Button from '../elements/Button';

const Form = ({ children, action, method, button = "Submit", enctype = true }) => {
    return (
        <RouterForm action={action} method={method} enctype={ enctype ? "multipart/form-data" : ""} className='p-8 bg-stone-200 dark:bg-stone-800 rounded-lg flex flex-col gap-8 justify-center items-center w-96 mt-12 mx-auto'>
            {children}
            <Button type="submit">
                {button}
            </Button>
        </RouterForm>
    );
}

export default Form;
