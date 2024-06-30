import React from 'react';
import { useRootContext } from '../../../../../../pages/Root';
import Icon from '../Icon';
import { FaCircleUser } from 'react-icons/fa6';
import { firstLetter } from '../../../../../../utils/textTransformation';

const User = ({ profileHandler }) => {
    let { user } = useRootContext();

    return (
        <div className='flex bg-rose-500 text-stone-100 py-2 px-6 gap-4 items-center justify-between cursor-pointer transition duration-500' onClick={profileHandler}>
            <p className='font-bold text-sm'>
                {user.firstName ? firstLetter(user.firstName) : "Sign in"}
            </p>
            {
                user.avatar && (
                    <img src={user.avatar} alt="avatar" className=' object-cover object-center rounded-full h-8 w-8' />
                ) || (
                    <Icon icon={<FaCircleUser />} />
                )
            }
        </div>
    );
}

export default User;
