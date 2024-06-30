import React, { useState } from 'react';
import Input from '../../../components/elements/Input';
import Form from '../../../components/form/Form';
import FileUpload from '../../../components/form/FileUpload';
import { customFetch } from '../../../utils/customFetch';
import { useDashboard } from '../Dashboard';
import Items from '../components/items/Items';
import { useRootContext } from '../../Root';
import AddButton from '../components/AddButton';

export let addAchievementAction = async ({ request }) => {
    let data = customFetch("achievement", request, "POST", true);
    return data;
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
                    <div className=' absolute z-20 h-full w-full flex justify-center items-center'>
                        <Form action='/dashboard/achievements' method='post'>
                            <Input input={{ id: "title", name: "title" }} />
                            <Input input={{ id: "points", name: "points", type: "number" }} />

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

            <Items items={achievements} onDelete={deleteItem} />
        </div>
    );
}

export default AuthAchievements;
