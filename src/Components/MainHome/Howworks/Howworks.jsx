
import {  GiBrainstorm } from 'react-icons/gi'

const Howworks = () => {
    return (
        <>
            <h1 className='font-bold text-5xl text-center mt-20 mb-10'>Here's how it works</h1>
            <div className="lg:flex lg:justify-around">
                <div className="flex flex-col items-center py-10">
                <img src="https://edukit-theme.myshopify.com/cdn/shop/files/icon-2.png?v=1613706928&width=275" alt="" className=" w-1/4" />
                <h1 className="font-bold text-3xl">Inspires</h1>
                    <div className="px-20">
                        <p className="pt-10 pb-5 text-xl text-justify">Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Elementum sagittis. Egestas congue quisque egestas diam in arcu.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center sm: py-5 py-10">
                <img src="https://edukit-theme.myshopify.com/cdn/shop/files/icon-3.png?v=1613706928&width=275" alt="" className=" w-1/4" />
                    <h1 className="font-bold text-3xl">Encouraging</h1>
                    <div className="px-20">
                        <p className="pt-10 pb-5 text-xl">Risus sed vulputate odio ut enim. Ultrices tincidunt arcu non sodales. Volutpat lacus laoreet non curabitur gravida arcu. Dapibus ultrices in iaculis nunc</p>
                    </div>
                </div>
                <div className="flex flex-col items-center py-10">
                    <img src="https://edukit-theme.myshopify.com/cdn/shop/files/icon-1.png?v=1613706928&width=275" alt="" className=" w-1/4" />
                    <h1 className="font-bold text-3xl">Creative</h1>
                    <div className="px-20">
                        <p className="pt-10 pb-5 text-xl text-justify">Tincidunt id aliquet risus feugiat. Nunc sed id semper risus. Turpis massa sed elementum tempus egestas sed sed risus pretium sit erentel dioti loe. </p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Howworks;