import React from 'react';
import Icon from '../../../components/elements/Icon';
import LinkButton from '../../../components/elements/LinkButton';
import { useRootContext } from '../../Root';

const LandingCard = ({ item }) => {
    let { user } = useRootContext();
    return (
        <div className=' relative p-4 lg:p-6 bg-stone-200 dark:bg-stone-800 transition duration-500'>
            <div className='absolute -top-6 p-2 lg:p-4 bg-rose-600 text-stone-200 rounded-md transition duration-500'>
                <Icon icon={item.icon} custom={"text-2xl lg:text-3xl"} />
            </div>
            <div className='mx-auto w-fit p-2 flex flex-col gap-2 lg:gap-4'>
                <h3 className='text-xl font-semibold text-center'>
                    {item.title}
                </h3>
                <p className='leading-relaxed'>
                    {item.text}
                </p>
                <LinkButton href={`/user/${user._id}/${item.url}`} >
                    Go to
                </LinkButton>
            </div>
        </div>
    );
}

export default LandingCard;
