import React from 'react';
import Input from '../../../../components/elements/Input';
import { Form } from 'react-router-dom';
import FileUpload from '../../../../components/form/FileUpload';
import { FaX } from 'react-icons/fa6';

const Edith = ({ item, close }) => {
    return (
        <Form action='' method='post' encType='multi' className={`${item ? "opacity-100" : "opacity-0 -z-20 hidden"} shadow max-w-3xl w-full p-6 bg-stone-200 fixed transition duration-500 z-20`}>
            <div className='relative'>
                <div className='absolute top-2 right-2 p-4 z-10 rounded-full bg-blue-400 text-stone-200' onClick={close} >
                    <FaX />
                </div>
            </div>
            <img src={item?.image} className='object-cover w-full object-center h-[500px]' alt={"no alt"} />
            <div className='flex gap-6 items-center justify-center p-4 mt-4'>
                <Input input={{ id: "category", name: "title", value: item?.title }} />
                <FileUpload
                    input={{
                        type: 'file',
                        id: 'image',
                        name: 'image',
                        accept: 'image/*',
                    }}
                    text="Upload category image"
                />
            </div>
        </Form>
    );
}

export default Edith;
