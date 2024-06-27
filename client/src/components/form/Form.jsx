import React from 'react';
import { Form as RouterForm } from 'react-router-dom';
import Button from '../elements/Button';

const Form = ({ children, action, method, button = "Submit" }) => {
    return (
        <RouterForm action={action} method={method} className='p-8 bg-stone-200 rounded-sm dark:bg-stone-800 flex flex-col gap-8 justify-center items-center w-96 mt-12   '>
            {children}
            <Button type="submit">
                {button}
            </Button>
        </RouterForm>
    );
}

export default Form;
