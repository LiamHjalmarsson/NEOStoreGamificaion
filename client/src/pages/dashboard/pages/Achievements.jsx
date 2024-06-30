import React from 'react';
import Heading from '../../../components/heading/Heading';
import Input from '../../../components/elements/Input';
import Form from '../../../components/form/Form';
import FileUpload from '../../../components/form/FileUpload';
import { customFetch } from '../../../utils/customFetch';

export let addAchievementAction = async ({ request }) => {
    let data = customFetch("achievement", request);
    return data;
}

const AuthAchievements = () => {
    return (
        <div>
            <Heading title="Achievements" />

            <Form action='/dashboard/achievements' method='post'>
                <Input input={{ id: "achievement", name: "achievement" }} />
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
    );
}

export default AuthAchievements;
