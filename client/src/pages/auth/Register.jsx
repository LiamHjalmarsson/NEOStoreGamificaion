import React from 'react';
import { Link, redirect, useActionData } from 'react-router-dom';
import Input from '../../components/elements/Input';
import Form from '../../components/form/Form';
import Heading from '../../components/heading/Heading';
import { customFetch } from '../../utils/customFetch';
import { toast } from 'react-toastify';

export const registerAction = async ({ request }) => {
    let recourse = await customFetch("auth/register", request);

    if (recourse.error) {
        return recourse.error;
    } else {
        localStorage.setItem("userToken", JSON.stringify(recourse.token));

        toast.success("User was successfully registered");
        return redirect("/");
    }
}

const Register = () => {
    let error = useActionData();

    return (
        <div className='relative min-h-[93.5vh] w-full flex justify-center items-center'>
            <div className='bg-gradient-to-l from-rose-500 to-stone-800 absolute top-0 left-0 w-full h-full'>
                <img src='/placeholder.png' className='absolute h-full w-full opacity-40' />
            </div>


            <div className='relative w-full max-w-md'>
                <Form method='post' action='/register' enctype={false} button='Register'>
                    <Heading title="Register" />

                    <Input input={{ id: "firstName", placeholder: "Enter first name", name: "firstName" }} error={error} custom="w-full" />
                    <Input input={{ id: "email", placeholder: "Enter email", name: "email" }} error={error} custom="w-full" />
                    <Input input={{ id: "password", placeholder: "Enter password", name: "password" }} error={error} custom="w-full" />

                    <div className='text-center'>
                        <p>
                            Already member?
                        </p>
                        <Link to="/login" className='text-blue-500 underline'>
                            Login
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Register;
