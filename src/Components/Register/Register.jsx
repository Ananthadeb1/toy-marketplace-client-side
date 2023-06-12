import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';
import { Toast } from 'bootstrap';

const Register = () => {
    const { createUser} = useContext(AuthContext);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log('Email:', email);
      console.log('Password:', password);
      const name = e.target.name.value;
      const photo = e.target.url.value;
      createUser(email,password)
      .then(res=>{
        const user = res.user;
         const nme = res.user.displayName = name;
         const pho =res.user.photoURL = photo;
         alert("profile created")
         console.log(nme)
         console.log(user)
         console.log(pho)
        })
    };
  
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="name">
             Your Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your full name"
            />
          </div>
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
          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="url">
              Photo URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              id="url"
              type="url"
              placeholder="Enter your Photo url"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline hover:bg-gray-700"
              type="submit"
              
            >
              Sign Up
            </button>
          </div>
          <p className='mt-4'>Already have an account?<Link to="/login" className='text-blue-500'> Please LogIn</Link></p>
        </form>
        <div>
        </div>
      </div>
    );
};

export default Register;