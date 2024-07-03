import React, { useState } from 'react';
import Input from '../../../../components/elements/Input';
import FileUpload from '../../../../components/form/FileUpload';
import { FaTrashCan, FaX } from 'react-icons/fa6';
import { useRootContext } from '../../../Root';
import Button from '../../../../components/elements/Button';

const Edith = ({ item, close, path }) => {
    let { deleteItem } = useRootContext();
    let [formData, setFormData] = useState({ ...item });

    let submitUpdate = async (e) => {
        e.preventDefault();
    }

    return (
        <div className='absolute w-full h-full flex justify-center items-center top-0'>
            <form method='patch' encType='multipart/form-data' className={`shadow max-w-3xl w-full p-4 lg:p-6 bg-stone-200 dark:bg-stone-800 fixed transition duration-500 z-20`} onSubmit={submitUpdate}>
                <div className='relative p-2 flex justify-between'>
                    <div className='p-4 z-10 w-fit rounded-full bg-red-400 hover:bg-red-500 transition-colors duration-500 text-stone-200 cursor-pointer' onClick={() => deleteItem(`${path}/${item._id}`)}>
                        <FaTrashCan />
                    </div>
                    <div className='p-4 z-10 w-fit rounded-full bg-blue-400 hover:bg-blue-500 text-stone-200 cursor-pointer duration-500' onClick={close} >
                        <FaX />
                    </div>
                </div>
                <img src={item?.image} className='object-cover w-full object-center hidden lg:h-[500px]' alt={"no alt"} />

                <div className='flex flex-wrap gap-8 items-center justify-center p-4 mt-4'>
                    {Object.keys(formData).map((key) => (
                        key !== '_id' && key !== '__v' && key !== 'createdAt' && key !== 'updatedAt' && key !== "imageId" && (
                            <React.Fragment key={key}>
                                {key === 'image' ? (
                                    <FileUpload
                                        input={{
                                            type: 'file',
                                            id: key,
                                            name: key,
                                            accept: 'image/*',
                                        }}
                                        text={`Upload ${path} image`}
                                    />
                                ) : (
                                    <Input
                                        input={{
                                            id: key,
                                            name: key,
                                            value: formData[key],
                                            placeholder: `Enter ${key}`,
                                        }}
                                    />
                                )}
                            </React.Fragment>
                        )
                    ))}
                </div>
                
                <div className='flex gap-8 p-4'>
                    <Button type="submit" custom="w-full">
                        Cancel
                    </Button>
                    <Button type="submit" custom="w-full">
                        Update
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Edith;