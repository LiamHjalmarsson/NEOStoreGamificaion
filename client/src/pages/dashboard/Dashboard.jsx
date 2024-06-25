const Dashboard = () => {
    return (
        <div className='flex flex-grow relative'>
            <div className='w-80 h-full fixed left-0 p-8 bg-stone-800'>
                <ul className='flex flex-col gap-8'>
                    <li className='p-4 font-bold cursor-pointer'>
                        Add Category
                    </li>
                    <li className='p-4 font-bold cursor-pointer'>
                        Add Product
                    </li>
                    <li className='p-4 font-bold cursor-pointer'>
                        Admin
                    </li>
                </ul>
            </div>
            <div className='flex-grow'>
            </div>
        </div>
    );
}

export default Dashboard;
