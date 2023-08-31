import { Link } from "react-router-dom";

const Investkid = () => {
    return (
        <>
        <div>
            <h2 className="text-5xl text-center font-bold mt-20 mb-10">It's never been easier to invest in your kid's toys</h2>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src="https://edukit-theme.myshopify.com/cdn/shop/files/grid-2.jpg?v=1613706931&width=535" className=" lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className="sm:pl-5">
                        <h1 className="text-4xl font-bold">Toys are all your baby need better toys for better growth</h1>
                        <p className="py-6">Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Faucibus interdum posuere lorem ipsum dolor. Eu tincidunt tortor aliquam nulla facilisi cras. Venenatis lectus magna.</p>
                        <Link to='/blogs'>
                            <button className="btn border-none rounded-3xl bg-[#febf00] hover:bg-black text-black font-semibold hover:text-white py-2 px-4 my-3">
                                get start
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row ">
                    <div className="sm:pl-5">
                        <h1 className="text-4xl font-bold">Toys are all your baby need better toys for better growth</h1>
                        <p className="py-6">Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Faucibus interdum posuere lorem ipsum dolor. Eu tincidunt tortor aliquam nulla facilisi cras. Venenatis lectus magna.</p>
                        <Link to='/blogs'>
                            <button className="btn border-none rounded-3xl bg-[#febf00] hover:bg-black text-black font-semibold hover:text-white py-2 px-4 my-3">
                                get start
                            </button>
                        </Link>
                    </div>
                    <img src="https://edukit-theme.myshopify.com/cdn/shop/files/grid-1.jpg?v=1613706931&width=535" className=" lg:w-1/2 rounded-lg shadow-2xl" />
                </div>
            </div>
        </div>
        </>
    );
};

export default Investkid;