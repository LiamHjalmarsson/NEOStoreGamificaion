import React from 'react';
import { Link, redirect, useActionData, useLoaderData, useNavigate } from 'react-router-dom';
import Heading from '../../components/heading/Heading';
import Input from '../../components/elements/Input';
import Form from '../../components/form/Form';

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

        if (recourse.error) {
            return recourse.error
        } else {
            localStorage.setItem("userToken", JSON.stringify(recourse.token));

            return redirect("/");
        }

    } catch (error) {
        console.log(error);
        return error;
    }
}

const Login = () => {
    let error = useActionData();

    return (
        <div className='relative min-h-[92vh] w-full flex justify-center items-center bg-stone-800'>
            <img src='/placeholder.png' className='absolute h-full w-full opacity-60' />

            <div className='relative'>
                <Form method='post' action='/login' button='Login' enctype={false}>
                    <Heading title="Login" />

                    <Input input={{ id: "email", placeholder: "Enter email", name: "email" }} error={error} />
                    <Input input={{ id: "password", placeholder: "Enter password", name: "password" }} error={error} />

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
