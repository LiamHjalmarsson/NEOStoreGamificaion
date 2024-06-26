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
        <nav className='mx-auto w-fit'>
            <ul className='flex gap-8 font-bold tracking-wide'>
                {
                    userLinks.map((link, index) => (
                        <LinkButton href={`/user/${user._id}/${link.url}`} key={index} custom={`${pathname.includes(link.url) ? "bg-stone-800 text-stone-200" : ""}`} >
                            {firstLetter(link.url)}
                        </LinkButton>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Navigation;
