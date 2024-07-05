import React from 'react';
import { Link, redirect, useActionData } from 'react-router-dom';
import Heading from '../../components/heading/Heading';
import Input from '../../components/elements/Input';
import Form from '../../components/form/Form';
import { customFetch } from '../../utils/customFetch';
import { toast } from 'react-toastify';

export const loginAction = async ({ request }) => {
    let recourse = await customFetch("auth/login", request);

    if (recourse.error) {
        return recourse.error;
    } else {
        localStorage.setItem("userToken", JSON.stringify(recourse.token));
        toast.success("User logged in successfully");
        return redirect("/");
    }
}

const Login = () => {
    let error = useActionData();

    return (
        <div className='relative min-h-[93.5vh] w-full flex justify-center items-center bg-stone-800'>
            <img src='/placeholder.png' className='absolute h-full w-full opacity-60' />

            <div className='relative w-full max-w-md'>
                <Form method='post' action='/login' button='Login' enctype={false}>
                    <Heading title="Login" />

                    <Input input={{ id: "email", placeholder: "Enter email", name: "email" }} error={error} custom="w-full" />
                    <Input input={{ id: "password", placeholder: "Enter password", name: "password" }} error={error} custom="w-full" />

                    <div className='text-center'>
                        <p>
                            Not a member?
                        </p>
                        <Link to="/register" className='text-blue-500 underline'>
                            Register
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Login;
