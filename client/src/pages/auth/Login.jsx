import React from 'react';
import { Form, Link, redirect, useLoaderData } from 'react-router-dom';
import Heading from '../../components/heading/Heading';
import Input from '../../components/elements/Input';
import Button from '../../components/elements/Button';

export const loginAction = async ({ request }) => {
    let formData = await request.formData();
    let data = Object.fromEntries(formData);

    try {
        let response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        let recourse = await response.json();

        localStorage.setItem("userToken", JSON.stringify(recourse.token));

        return redirect("/")
    } catch (error) {
        console.log(error);
        return error;
    }
}

const Login = () => {
    return (
        <div className='relative min-h-[90vh] w-full flex justify-center items-center bg-stone-800'>
            <img src='/placeholder.png' className='absolute h-full w-full opacity-60' />

            <Form method='post' action='/login' className='p-8 bg-stone-200 dark:bg-stone-800 relative z-10 max-w-md w-full rounded-md transition duration-300 flex flex-col gap-12'>
                <Heading title="Login" />

                <Input input={{ id: "email", placeholder: "Enter email", name: "email" }} />
                <Input input={{ id: "password", placeholder: "Enter password", name: "password" }} />

                <div className='text-center'>
                    <p>
                        Not a member?
                    </p>
                    <Link to="/register" className='text-blue-500 underline'>
                        Register
                    </Link>
                </div>

                <div className='flex gap-12 justify-center'>
                    <Button>
                        Cancel
                    </Button>
                    <Button type="submit" custom="bg-stone-800 text-stone-200 hover:bg-stone-700">
                        Login
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default Login;
