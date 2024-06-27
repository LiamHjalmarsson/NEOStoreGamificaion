import React from 'react';
import Heading from '../../../components/heading/Heading';
import Input from '../../../components/elements/Input';
import Form from '../../../components/form/Form';
import { useActionData } from 'react-router-dom';
import { customFetch } from '../../../utils/customFetch';

export let addRankAction = async ({ request }) => {
    let data = await customFetch("rank", request);
    return data;
}

const AuthRanks = () => {
    let data = useActionData();

    return (
        <div>
            <Heading title="Ranks" />

            <Form action='/dashboard/ranks' method='post'>
                <Input input={{ id: "rank", name: "rank" }} />
                <Input input={{ id: "unlockAt", name: "unlockAt", type: "number" }} />
            </Form>
        </div>
    );
}

export default AuthRanks;
