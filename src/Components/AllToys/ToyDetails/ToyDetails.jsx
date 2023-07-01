import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toy = useLoaderData();
    const {image,name, seller_name,seller_email ,sub_category,rating,quantity,price,product_description}= toy;
    return (
        <div>
            <section className="p-6 bg-gray-100 text-white">
                <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-2 py-16 rounded-md  md:px-8 xl:col-span-2 bg-gray-600">
                        <h1 className="text-5xl font-extrabold text-gray-50">{name}</h1>
                        <h1 className="text-3xl font-extrabold text-gray-50">{seller_name}</h1>
                        <h1 className="text-3xl font-extrabold text-gray-50">{seller_email}</h1>
                        <h1 className="text-2xl font-semibold text-gray-50">{sub_category}</h1>
                        <p className="my-3 border-white border-2 p-2 text-left">
                            {product_description}
                        </p>
                        <div className='flex justify-between py-4 text-white text-2xl'>
                            <p className='font-bold'>
                                Price: ${price}
                            </p>
                            <p className='font-bold'>
                                Rating: {rating}
                            </p>
                        </div>
                        <h1 className="text-2xl font-semibold text-gray-50">Available {quantity} pice</h1>
                    </div>
                    <img src={image} alt="{name}" className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500 md:8 " />
                </div>
            </section>
        </div>
    );
};

export default ToyDetails;