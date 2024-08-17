import React from 'react';
import { useRootContext } from '../../../../../pages/Root';
import { firstLetter } from '../../../../../utils/textTransformation';
import LinkButton from '../../../../elements/LinkButton';
import { FiLogOut } from "react-icons/fi";
import { userLinks } from '../../../../../utils/links';

const Profile = ({ open }) => {
    let { user, logout } = useRootContext();

    return (
        <div className={`${open ? "translate-x-0" : "translate-x-full"} transform transition duration-500 p-8 bg-stone-100 border text-stone-800 dark:bg-stone-800 dark:text-stone-200 top-24 lg:top-32 md:max-w-sm w-full right-0 fixed flex flex-col gap-8`}>
            {
                user && (
                    <div className='flex flex-col gap-4 justify-center items-center'>
                        {
                            user.avatar && <img src={user.avatar} alt="avatar" className=' object-cover object-center rounded-full h-12 w-12' />
                        }
                        <h3 className='text-center text-lg font-bold tracking-wide'>
                            {firstLetter(user.firstName)}
                        </h3>
                    </div>
                )
            }

            {
                !user && (
                    <div className='flex justify-between items-center gap-6 w-full'>
                        <LinkButton href="register">
                            Register
                        </LinkButton>
                        <LinkButton href="login">
                            Login
                        </LinkButton>
                    </div>
                ) || (
                    <div className=' flex flex-wrap justify-center gap-6'>
                        <ul className='flex flex-wrap gap-6'>
                            <LinkButton href={`user/${user._id}`} custom="w-full">
                                Account
                            </LinkButton>
                            {
                                userLinks.map((link, index) => (
                                    <LinkButton href={`user/${user._id}/${link.url}`} key={index}>
                                        {firstLetter(link.url)}
                                    </LinkButton>
                                ))
                            }
                        </ul>
                        <button onClick={logout} className='flex gap-2 justify-center items-center dark:text-rose-500'>
                            <span>
                                Logout
                            </span>
                            <FiLogOut />
                        </button>
                    </div>
                )
            }

        </div>
    );
}

export default Profile;
