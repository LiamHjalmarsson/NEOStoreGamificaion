import React from 'react';
import { Link, redirect, useActionData } from 'react-router-dom';
import Input from '../../components/elements/Input';
import Form from '../../components/form/Form';
import Heading from '../../components/heading/Heading';

export const registerAction = async ({ request }) => {
    let formData = await request.formData();
    let data = Object.fromEntries(formData);

    try {
        let response = await fetch("/api/auth/register", {
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
        return error;
    }
}

const Register = () => {
    let error = useActionData();

    return (
        <div className='relative min-h-[93.5vh] w-full flex justify-center items-center bg-stone-800'>
            <img src='/placeholder.png' className='absolute h-full w-full opacity-60' />

            <div className='relative w-full max-w-md'>
                    <Form method='post' action='/register' enctype={false} button='Register'>
                    <Heading title="Register" />

                    <Input input={{ id: "firstName", placeholder: "Enter first name", name: "firstName" }} error={error} custom="w-full" />
                    <Input input={{ id: "lastName", placeholder: "Enter last name", name: "lastName" }} error={error} custom="w-full" />
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
