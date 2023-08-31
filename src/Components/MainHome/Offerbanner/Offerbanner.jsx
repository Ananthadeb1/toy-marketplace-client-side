

const Offerbanner = () => {
    return (
        <>
            <div className=" bg-[#FF8339] mb-20 mb:pb-0">
                <div className=' flex flex-col md:flex-row  items-center '>
                    <img src="https://img.freepik.com/premium-photo/what-is-that-my-head-small-child-red-horns-cute-imp-trick-treat-happy-halloween-scared-little-girl-halloween-party-devil-inside-me-she-has-bad-character-autumn-holiday-celebration_474717-79359.jpg?w=996" className="md:w-2/4 h-full" alt="" />

                    <div className=' h-full w-full text-left text-white pl-5 pt-10'>
                        <h2 className='text-2xl lg:text-4xl font-bold '> Safe toys for children </h2>

                        <div className="flex items-center pb-2 pt-4">
                            <img src="https://edukit-theme.myshopify.com/cdn/shop/files/icon-4.png?v=1613706942&width=1420" alt="" />
                            <p className="text-xl pl-5">Beautiful & well-designed</p>
                        </div>
                        <div className="flex items-center py-2">
                            <img src="https://edukit-theme.myshopify.com/cdn/shop/files/icon-5.png?v=1613706943&width=1420" alt="" />
                            <p className="text-xl pl-5">High durable toys</p>
                        </div>
                        <div className="flex items-center py-2">
                            <img src="https://edukit-theme.myshopify.com/cdn/shop/files/icon-6.png?v=1613706943&width=1420" alt="" />
                            <p className="text-xl pl-5">Recyclable materials</p>
                        </div>
                        <div className="flex items-center py-2">
                            <img src="https://edukit-theme.myshopify.com/cdn/shop/files/icon-7.png?v=1613706943&width=1420" alt="" />
                            <p className="text-xl pl-5">Safe & non-toxic</p>
                        </div>
                        <button className="btn border-none rounded-3xl bg-[#febf00] hover:bg-black text-black font-semibold hover:text-white py-2 px-4 my-3">
                            Get started now
                        </button>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Offerbanner;