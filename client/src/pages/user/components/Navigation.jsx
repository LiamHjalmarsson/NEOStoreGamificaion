import React from 'react';
import LinkButton from '../../../components/elements/LinkButton';
import { firstLetter } from '../../../utils/textTransformation';
import { useRootContext } from '../../Root';
import { useLocation } from 'react-router-dom';

let links = [
    {
        url: "benefits",
    },
    {
        url: "orders",
    },
    {
        url: "achievements",
    },
    {
        url: "settings",
    },
]
const Navigation = () => {
    let { user } = useRootContext();
    let { pathname } = useLocation()

    return (
        <nav className='mx-auto w-fit'>
            <ul className='flex gap-8 font-bold tracking-wide'>
                {
                    links.map((link, index) => (
                        <LinkButton href={`/user/${user._id}/${link.url}`} key={index} custom={`${pathname.includes(link.url) ? "bg-stone-800 text-stone-200 dark:bg-indigo-500 " : ""}`} >
                            {firstLetter(link.url)}
                        </LinkButton>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Navigation;
