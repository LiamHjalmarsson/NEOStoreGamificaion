import React, { useState } from 'react';
import Input from '../../../components/elements/Input';
import Form from '../../../components/form/Form';
import { customFetch } from '../../../utils/customFetch';
import { useDashboard } from '../Dashboard';
import { useRootContext } from '../../Root';
import { FaPen, FaTrash } from 'react-icons/fa';
import AddButton from '../components/AddButton';
import Item from '../components/items/Item';
import Edith from '../components/items/Edith';

export let addRankAction = async ({ request }) => {
    let recourse = await customFetch("rank", request);

    if (recourse.error) {
        toast.error(recourse.error);
    } else {
        toast.success("Product added successfully");
    }

    return recourse;
}

const AuthRanks = () => {
    let { ranks, deleteItem } = useDashboard();
    let [showForm, setShowForm] = useState(false);
    let [edithItem, setEdithItem] = useState(null);

    let showHandler = () => {
        setShowForm(!showForm);
    }

    let edithHandler = (item) => {
        if (item._id === edithItem?._id) {
            setEdithItem(null);
        } else {
            setEdithItem(item);
        }
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
                    <Item key={index} item={rank} openEdith={edithHandler} />
                ))}
            </div>

            { edithItem && <Edith item={edithItem} close={() => setEdithItem(false)} delete={deleteItem} path={"ranks"}/>}

        </div>
    );
}

export default AuthRanks;
