import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (

        <div className="grid h-screen place-content-center bg-white">
            <div className="text-center">
                <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1688143034~exp=1688143634~hmac=3d3bd3ac0a210b177e633007495c12fe8c401de8e91625f2501520561722e888" alt="" />

                <h1
                    className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                    Uh-oh!
                </h1>

                <p className="mt-4 text-gray-500 font-bold text-3xl">{error.status} {error.statusText}</p>
                <Link to='/'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold hover:text-white py-2 px-4 rounded my-3">
                        Back To Home
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default ErrorPage;