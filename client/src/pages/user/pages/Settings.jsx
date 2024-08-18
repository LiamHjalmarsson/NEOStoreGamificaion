import React, { useState } from 'react';
import Navigation from '../components/navigation';
import Heading from '../../../components/heading/Heading';
import Input from '../../../components/elements/Input';
import { useRootContext } from '../../Root';
import { toast } from 'react-toastify';
import Form from '../../../components/form/Form';
import FileUpload from '../../../components/form/FileUpload';
import { customFetch } from '../../../utils/customFetch';

export let updateUser = async ({ request }) => {
    let recourse = await customFetch("user/update-user", request, "PATCH", true);
    toast.success(recourse.message);

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
        <div className='pt-32 flex flex-col gap-6 justify-center items-center'>
            <Heading title="Settings" />

            <Navigation />

            <div className='px-4'>
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

        </div>
    );
}

export default Settings;
