import React, { useState } from 'react';
import Navigation from '../components/navigation';
import Heading from '../../../components/heading/Heading';
import Input from '../../../components/elements/Input';
import { useRootContext } from '../../Root';
import { toast } from 'react-toastify';
import Form from '../../../components/form/Form';

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
    let [avatar, setAvatar] = useState(user.avatar ? user.avatar : "");

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

    let handleAvatar = (e) => {
        let file = e.target.files[0];
        setAvatar(URL.createObjectURL(file));
    };

    return (
        <div className='pt-12 flex flex-col gap-6 justify-center items-center'>
            <Heading title="Settings" />

            <Navigation />

            <Form action={`/user/${user._id}/settings`} method='post' enctype="multipart/form-data" button='Update'>
                <div className='flex flex-wrap gap-8'>
                    <div className='flex flex-col gap-2 w-full items-center'>
                        {avatar && (
                            <img src={avatar} alt="Image Preview" className="w-20 h-20 object-cover rounded-full" />
                        )}

                        <div className="flex items-center justify-center w-full">
                            <label for="avatar" className="text-center w-1/2 cursor-pointer border-b border-stone-800 mx-auto ">
                                <p className="">Upload new avatar</p>
                                <input
                                    type='file'
                                    id='avatar'
                                    name='avatar'
                                    accept='image/*'
                                    className='hidden'
                                    onChange={handleAvatar}
                                />
                            </label>
                        </div>
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
