import React from 'react';
import { useRootContext } from '../../../../../../pages/Root';
import Icon from './Icon';
import { FaCircleUser } from 'react-icons/fa6';

const User = ({ profileHandler }) => {
    let { user } = useRootContext();

    return (
        <div className='flex border border-stone-200 py-1 px-4 gap-4 items-center cursor-pointer ml-2 rounded-md' onClick={profileHandler}>
            <p>
                {user.firstName ? user.firstName : "Sign in"}
            </p>
            <Icon icon={<FaCircleUser />} />
        </div>
    );
}

export default User;
