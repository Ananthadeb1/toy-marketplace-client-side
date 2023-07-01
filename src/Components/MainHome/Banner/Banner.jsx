import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Carousel>
            <div className='relative'>
                <img src="https://img.freepik.com/free-photo/red-pickup-model-black-floor_1150-16351.jpg?w=996&t=st=1688207377~exp=1688207977~hmac=d3d3f7c052fdd585bfe0c51a924c7d704c5d783f2401820697d81ffcd08d3b4e" className='h-full' alt="" />
                <div className="absolute top-1/4 left-10 text-white w-3/4 text-left ">
                    <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold'>We are maintain our <br /> Product quality & <br />Premiumness</h1>
                    <p className='mt-3 hidden lg:block w-3/5'>Are you looking for a Reputed And Trusted toy seller?We are always at your service to meet up all the requirements related to kids dream.  </p>
                    <Link to='/services'>
                        <button className="bg-white hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3">
                            More Details
                        </button>
                    </Link>
                </div>

            </div>
            <div>
                <img src="https://img.freepik.com/free-photo/toy-car-with-red-bow_23-2147959975.jpg?t=st=1688207544~exp=1688208144~hmac=153e1411c1614f3defa9e062af2b3722a58010c66e39fb4f6a723428a37feb79"  alt="" />
                <div className="absolute top-1/4 left-10 text-white w-3/4 text-left ">
                    <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold'>We are maintain our <br /> Product quality & <br />Premiumness</h1>
                    <p className='mt-3 hidden lg:block w-3/5'>Are you looking for a Reputed And Trusted toy seller?We are always at your service to meet up all the requirements related to kids dream. </p>
                    <Link to='/services'>
                        <button className="bg-white hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 rounded my-3">
                            More Details
                        </button>
                    </Link>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;