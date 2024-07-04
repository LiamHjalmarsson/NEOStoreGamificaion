import BurgerLine from "./BurgerLine";

const BurgerMenu = ({menuHandler, open}) => {
    return (
        <>        
            <div className="flex lg:hidden items-end relative cursor-pointer justify-end max-lg:order-1 lg-w-28">
                <div className="flex relative p-2 cursor-pointer z-10" onClick={menuHandler}>
                    <div className={`${open ? "h-0" : "h-5"} text-2xl relative w-6 transition-all duration-200`}>
                        <BurgerLine custom={`top-0 ${open ? '-rotate-45' : ""}`} />
                        <BurgerLine custom={`top-1/2 ${open ? 'opacity-0 translate-x-4' : "opacity-100"}`} />
                        <BurgerLine custom={`top-full ${open ? 'rotate-45' : ""}`} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default BurgerMenu;
