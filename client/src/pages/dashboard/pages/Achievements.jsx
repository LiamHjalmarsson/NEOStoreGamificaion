import React, { useState } from 'react';
import Input from '../../../components/elements/Input';
import Form from '../../../components/form/Form';
import FileUpload from '../../../components/form/FileUpload';
import { customFetch } from '../../../utils/customFetch';
import { useDashboard } from '../Dashboard';
import Items from '../components/items/Items';
import { useRootContext } from '../../Root';
import AddButton from '../components/AddButton';
import { toast } from 'react-toastify';
import Heading from '../../../components/heading/Heading';

export let addAchievementAction = async ({ request }) => {
    let recourse = await customFetch("achievement", request, "POST", true);

    if (recourse.error) {
        toast.error(recourse.error);
    } else {
        toast.success("Successfully added achievement");
    }
    return recourse;
}

const AuthAchievements = () => {
    let { achievements } = useDashboard();
    let { deleteItem } = useRootContext();
    let [showForm, setShowForm] = useState(false);

    let showHandler = () => {
        setShowForm(!showForm);
    }

    return (
        <div className='relative grow'>
            {
                showForm && (
                    <div className='fixed z-20 top-0 h-full w-full flex justify-center items-center px-4'>
                    {/* <div className=' absolute z-20 h-full w-full flex justify-center items-center'> */}
                        <Form action='/dashboard/achievements' method='post'>
                            <Heading title="Add achievement" />

                            <Input input={{ id: "title", name: "title" }} custom="w-full"/>
                            <Input input={{ id: "points", name: "points", type: "number" }} custom="w-full"/>

                            <FileUpload
                                input={{
                                    type: 'file',
                                    id: 'image',
                                    name: 'image',
                                    accept: 'image/*',
                                }}
                                text="Upload achievement image"
                            />
                        </Form>
                    </div>
                )
            }

            <AddButton showHandler={showHandler} show={showForm} />

            <Items items={achievements} path="achievement" />
        </div>
    );
}

export default AuthAchievements;
