import React from 'react';
import { Form, Link, redirect } from 'react-router-dom';
import Heading from '../../components/heading/Heading';
import Input from '../../components/elements/Input';
import Button from '../../components/elements/Button';

export const loginAction = async ({ request }) => {
    let formData = await request.formData();

    let data = Object.fromEntries(formData);

    console.log(
        data
    );
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

        return redirect("/");
    } catch (error) {
        console.log(error);
        return error;
    }
}

const Login = () => {

    
    return (
        <div className='relative min-h-[90vh] w-full flex justify-center items-center'>
            <div className='bg-stone-500 absolute h-full w-full'></div>

            <Form method='post' action='/login' className='p-8 bg-stone-200 dark:bg-stone-800 relative z-10 max-w-md w-full rounded-md transition duration-300'>
                <Heading title="Login" />

                <Input input={{ id: "email", title: "email", placeholder: "Enter email", name: "email" }} />
                <Input input={{ id: "password", title: "password", placeholder: "Enter password", name: "password" }} />

                <div className='text-center my-8'>
                    <p>
                        Not a member?
                    </p>
                    <Link to="/register" className='text-blue-500 underline'>
                        Register
                    </Link>
                </div>

                <div className='flex gap-8 justify-between mt-12'>
                    <Button>
                        cancel
                    </Button>
                    <Button>
                        Login
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default Login;
