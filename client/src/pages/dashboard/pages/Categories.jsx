import React, { useState } from 'react';
import Input from '../../../components/elements/Input';
import { toast } from 'react-toastify';
import Form from '../../../components/form/Form';
import FileUpload from '../../../components/form/FileUpload';
import { customFetch } from '../../../utils/customFetch';
import { useRootContext } from '../../Root';
import Items from '../components/items/Items';
import AddButton from '../components/AddButton';

export let addCategoryAction = async ({ request }) => {
    let recourse = await customFetch("category", request, "POST", true);
    toast.success("Category added successfully");

    return recourse;
}

const AuthCategories = () => {
    let { categories, deleteItem } = useRootContext();
    let [showForm, setShowForm] = useState(false);

    let showHandler = () => {
        setShowForm(!showForm);
    }

    return (
        <div className='relative'>
            {
                showForm && (
                    <div className=' absolute z-20 h-full w-full flex justify-center items-center'>
                        <Form action='/dashboard/categories' method='post' enctype={true}>
                            <Input input={{ id: "category", name: "title" }} />
                            <FileUpload
                                input={{
                                    type: 'file',
                                    id: 'image',
                                    name: 'image',
                                    accept: 'image/*',
                                }}
                                text="Upload category image"
                            />
                        </Form>
                    </div>
                )
            }

            <AddButton showHandler={showHandler} show={showForm} />

            <Items items={categories} onDelete={deleteItem} />
        </div>
    );
}

export default AuthCategories;
