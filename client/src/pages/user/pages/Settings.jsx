import React, { useState } from 'react';
import Navigation from '../components/navigation';
import Heading from '../../../components/heading/Heading';
import { Form } from 'react-router-dom';
import Input from '../../../components/elements/Input';
import { useRootContext } from '../../Root';
import Button from '../../../components/elements/Button';

export let updateUser = async ({ request }) => {
    let formData = await request.formData();
    let data = Object.fromEntries(formData);

    let response = await fetch("/api/user/update-user", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    console.log(response);

    return response;
}

const Settings = () => {
    let { user } = useRootContext();
    let [firstName, setFirstName] = useState(user.firstName);
    let [lastName, setLastName] = useState(user.lastName);
    let [email, setEmail] = useState(user.email);

    let inputs = [
        {
            id: "firstName",
            value: firstName,
            onChange: (e) => setFirstName(e.target.value)
        },
        {
            id: "lastName",
            value: lastName,
            onChange: (e) => setLastName(e.target.value)
        },
        {
            id: "email",
            value: email,
            onChange: (e) => setEmail(e.target.value)
        },
    ];

    return (
        <div className='pt-12 flex flex-col gap-6'>
            <Heading title="Settings" />

            <Navigation />

            <Form action={`/user/${user._id}/settings`} method='patch' className='p-8 bg-stone-200 max-w-xl mx-auto mt-12 px-12'>
                <div className='flex flex-wrap gap-8'>
                    {
                        inputs.map((input, index) => (
                            <div className='grow' key={index}>
                                <Input input={{ id: input.id, value: input.value, name: input.id, onChange: input.onChange }} />
                            </div>
                        ))
                    }
                </div>

                <Button type="submit" custom="mt-8 mx-auto">
                    Update
                </Button>
            </Form>
        </div>
    );
}

export default Settings;
