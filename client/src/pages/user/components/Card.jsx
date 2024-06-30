import React from 'react';
import Icon from '../../../components/elements/Icon';
import LinkButton from '../../../components/elements/LinkButton';

const Card = ({ item, id }) => {
    return (
        <div className=' relative p-6 bg-stone-200 dark:bg-stone-800 transition duration-300'>
            <div className='absolute -top-6 p-4 bg-rose-600 text-stone-200 rounded-md transition duration-300'>
                <Icon icon={item.icon} custom={"text-3xl"} />
            </div>
            <div className='mx-auto w-fit p-2 flex flex-col gap-4'>
                <h3 className='text-xl font-semibold text-center'>
                    {item.title}
                </h3>
                <p className=' leading-relaxed'>
                    {item.text}
                </p>
                <LinkButton href={`/user/${id}/${item.url}`} >
                    Go to
                </LinkButton>
            </div>
        </div>
    );
}

export default Card;
