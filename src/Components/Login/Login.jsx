import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
const {signIn}= useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', e.target.email.value);
    console.log('Password:', e.target.password.value);
    const email=e.target.email.value;
    const password=e.target.password.value;
    signIn(email,password)
    .then(res=>{
        const user = res.user;
        console.log(user)
        alert("user is created")
    })
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline hover:bg-gray-700"
            type="submit"
            
          >
            Log In
          </button>
        </div>
        <p className='mt-4'>Don`t have an account?<Link to="/register" className='text-blue-500'> Create one.</Link></p>
      </form>
      <div>
      </div>
    </div>
  );
};

export default Login;
