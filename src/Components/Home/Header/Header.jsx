// import { Link } from 'react-router-dom';
// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import './header.css'
// // import icon from '../Home/Home/vector.png'
// import { AuthContext } from '../Provider/AuthProvider';
// import { useContext } from 'react';

import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";


// const Header = () => {
//     const [user] = useContext(AuthContext);
//     const handleSignOut = () => {
//         // signOut(auth)
//     }
//     return (
//         <Navbar collapseOnSelect expand="lg" className='nav-bar' variant="dark">
//                 <Container>
//                     <Navbar.Brand className='d-flex align-center' href="/"><h3 className='my-2 p-3 header-name ' >Perfume House  </h3>
//                         <img src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww&w=1000&q=80" className='w-25 h-75 my-auto' alt="" /></Navbar.Brand>
//                     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                     <Navbar.Collapse id="responsive-navbar-nav">
//                         <Nav className="me-auto">
//                             <Nav.Link as={Link} to="/home">Home</Nav.Link>
//                             <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
//                             <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
//                             {
//                                 user ? <NavDropdown title="Manage" id="collasible-nav-dropdown">
//                                     <NavDropdown.Item href="inventory#addToStock">Add to Stock</NavDropdown.Item>
//                                     <NavDropdown.Item href="/stocks">Stocks</NavDropdown.Item>
//                                 </NavDropdown> : <></>
//                             }
//                         </Nav>
//                         <Nav>
//                             <Nav.Link href="/about">About</Nav.Link>
//                             {user ?
//                                 <button onClick={handleSignOut} className='text-decoration-none btn text-light'>sign-out</button>
//                                 : <Nav.Link as={Link} to="/login">
//                                     Login
//                                 </Nav.Link>}
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//     );
// };

// export default Header;

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label  className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"><Link to="/">Toy House</Link></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          {/* <a className="btn mr-4">LogIn</a> */}
          {user ?  <h1  className="btn mr-4 hover:bg-gray-700">SignOut </h1> : <Link to="/login" className=" hover:bg-gray-700 btn mr-4">Login</Link>}
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
      </div>
    </div>
    </div>
  );
};

export default Header;
