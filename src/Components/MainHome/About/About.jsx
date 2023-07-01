import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className="bg-gray-50 text-black pt-8">
            <h1 className='font-bold text-4xl text-center underline lg:my-6 text-orange-600'>About Us</h1>
            <div className="container flex flex-col justify-center p-6 mx-auto  lg:flex-row lg:justify-between">
                <div className="flex lg:mt-20 items-center justify-center  lg:p-6   h-72 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="https://img.freepik.com/free-photo/mechanic-standing-with-arms-crossed_1170-1346.jpg?w=996&t=st=1688221363~exp=1688221963~hmac=3009eade3848f9238856fa91a336e46c4e265845a16e51fd3337ec9eb9fed0bf" alt="" className="object-contain lg:mt-5  h-80 lg:h-[50rem] xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-lg xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">We give you complete control for customization of your toy.
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">The Toyland  is one of the leading reputed online toy maker and seller platform in Bangladesh that started its journey in 2006 with an objective to make the search for a customized and qualitifull toy for your child. This website is a resourceful online database where people can find a list of toys. we are available in Dhaka, Chittagong, Barishal, Kishoreganj, and other big and small cities.
                    </p>
                    <Link to='/blogs'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold hover:text-white py-2 px-4 rounded my-3">
                            More About Us
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;