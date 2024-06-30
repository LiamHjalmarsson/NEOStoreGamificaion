import React, { useState } from 'react';
import Input from '../../../components/elements/Input';
import Form from '../../../components/form/Form';
import { customFetch } from '../../../utils/customFetch';
import { useDashboard } from '../Dashboard';
import { useRootContext } from '../../Root';
import { FaPen, FaTrash } from 'react-icons/fa';
import AddButton from '../components/AddButton';

export let addRankAction = async ({ request }) => {
    let data = await customFetch("rank", request);
    return data;
}

const AuthRanks = () => {
    let { ranks } = useDashboard();
    let { deleteItem } = useRootContext();
    let [showForm, setShowForm] = useState(false);

    let showHandler = () => {
        setShowForm(!showForm);
    }

    return (
        <div className='relative grow'>
            {
                showForm && (
                    <div className='absolute z-20 h-full w-full flex justify-center items-center'>
                        <Form action='/dashboard/ranks' method='post'>
                            <Input input={{ id: "rank", name: "title" }} />
                            <Input input={{ id: "unlockAt", name: "unlockAt", type: "number" }} />
                        </Form>
                    </div>
                )
            }

            <AddButton showHandler={showHandler} show={showForm} />

            <div className={`grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-6 xl:gap-12 grid justify-center items-center px-6 xl:px-12 pb-12 mt-12`}>
                {ranks.map((rank, index) => (
                    <div key={index} className='relative'>
                        <div className='absolute top-4 right-4 p-4 z-10 rounded-full bg-blue-400 hover:bg-blue-500 transition-colors duration-300 text-stone-200 cursor-pointer'>
                            <FaPen />
                        </div>
                        <div className='absolute top-4 left-4 p-4 z-10 rounded-full bg-red-400 hover:bg-red-500 transition-colors duration-300 text-stone-200 cursor-pointer' onClick={() => deleteItem(`rank/${rank._id}`)}>
                            <FaTrash />
                        </div>
                        <div className='flex-grow min-w-64 relative group bg-stone-800 flex justify-center items-center h-72 rounded-3xl text-3xl uppercase font-bold tracking-wider'>
                            {rank.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AuthRanks;
