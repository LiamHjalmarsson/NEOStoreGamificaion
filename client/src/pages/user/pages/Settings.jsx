import React, { useState } from 'react';
import Navigation from '../components/navigation';
import Heading from '../../../components/heading/Heading';
import Input from '../../../components/elements/Input';
import { useRootContext } from '../../Root';
import { toast } from 'react-toastify';
import Form from '../../../components/form/Form';
import FileUpload from '../../../components/form/FileUpload';

export let updateUser = async ({ request }) => {
    let formData = await request.formData();

    let file = formData.get("avatar");

    if (file && file.size > 500000) {
        toast.error("Image to large");
        return null
    }

    let response = await fetch("/api/user/update-user", {
        method: "PATCH",
        headers: {},
        body: formData
    });

    let recourse = await response.json();

    return recourse;
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
        <div className='pt-24 flex flex-col gap-6 justify-center items-center'>
            <Heading title="Settings" />

            <Navigation />

            <Form action={`/user/${user._id}/settings`} method='post' enctype={true} button='Update'>
                <div className='flex flex-wrap gap-8'>
                    <div className='flex flex-col gap-2 w-full items-center'>
                        <FileUpload
                            input={{
                                type: 'file',
                                id: 'avatar',
                                name: 'avatar',
                                accept: 'image/*',
                            }}
                            text="Upload new avatar"
                            context={user.avatar}
                        />

                    </div>
                    {
                        inputs.map((input, index) => (
                            <div className='grow' key={index}>
                                <Input input={{ id: input.id, value: input.value, name: input.id, onChange: input.onChange }} />
                            </div>
                        ))
                    }
                </div>
            </Form>
        </div>
    );
}

export default Settings;
