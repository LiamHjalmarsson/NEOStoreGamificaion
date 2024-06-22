import React from 'react';

const Profile = ({ open }) => {
    return (
        <div className={`${open ? "translate-x-0" : "translate-x-full"} transform transition duration-300 p-12 bg-stone-800 top-32 mt-2 w-full max-w-sm right-0 fixed z-10 flex flex-col gap-12`}>
            <h3 className='text-center text-lg tracking-wide'>
                usernames
            </h3>
            <ul>
                <li className='p-2 border-stone-700 border'>
                    Profile
                </li>
            </ul>
        </div>
    );
}

export default Profile;
