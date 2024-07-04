import React from 'react';
import LinkButton from '../../../components/elements/LinkButton';
import { firstLetter } from '../../../utils/textTransformation';
import { useRootContext } from '../../Root';
import { useLocation } from 'react-router-dom';
import { userLinks } from '../../../utils/links';

const Navigation = () => {
    let { user } = useRootContext();
    let { pathname } = useLocation()

    return (
        <nav className='mx-auto w-full max-w-4xl'>
            <ul className='flex gap-8 font-bold  w-full tracking-wide'>
                <LinkButton href={`/user/${user._id}`} >
                    Account
                </LinkButton>
                {
                    userLinks.map((link, index) => (
                        <LinkButton key={index} href={`/user/${user._id}/${link.url}`} custom={`${pathname.includes(link.url) ? "bg-rose-600 border-rose-600 text-stone-200" : ""}`} >
                            {firstLetter(link.url)}
                        </LinkButton>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Navigation;
