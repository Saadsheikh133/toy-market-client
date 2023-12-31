import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import logo from '../../assets/images/logo.jpg';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <nav className="navbar bg-base-300 px-8 mb-10 py-5 rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        <li><ActiveLink to='/'>Home</ActiveLink></li>
                        <li tabIndex={0}>
                            <ActiveLink to='/allToys'>All Toys </ActiveLink>
                        </li>
                        {
                            user &&
                            <>
                                <li><ActiveLink to='/myToys'>My Toys</ActiveLink></li>
                                <li><ActiveLink to='/addToy'>Add A Toy</ActiveLink></li>
                            </>
                        }
                        <li><ActiveLink to='/blog'>Blog</ActiveLink></li>
                    </ul>
                </div>
                <img className='rounded-full w-1/6 mr-3' src={logo} alt="" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-400 inline-block text-transparent bg-clip-text">Toy Collections</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl gap-4">
                    <li><ActiveLink to='/'>Home</ActiveLink></li>
                    <li tabIndex={0}>
                        <ActiveLink className='ml-4 mr-4' to='/allToys'> All Toys </ActiveLink>
                    </li>
                    {
                        user &&
                        <>
                            <li><ActiveLink to='/myToys'>My Toys</ActiveLink></li>
                            <li><ActiveLink to='/addToy'>Add A Toy</ActiveLink></li>
                        </>
                    }
                    <li><ActiveLink to='/blog'>Blog</ActiveLink></li> 
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <div className='tooltip tooltip-bottom' data-tip={user?.displayName}>
                                <img className='rounded-full h-16' src={user?.photoURL} alt="" />
                            </div>
                            <a onClick={handleLogOut} className="ml-4 btn btn-warning bg-gradient-to-r from-blue-400 to-purple-500 hover:from-pink-500 hover:to-sky-500 text-white">Log Out</a>
                        </> :

                        <Link to='/login' className="btn btn-warning bg-gradient-to-r from-blue-400 to-purple-500 hover:from-pink-500 hover:to-sky-500 text-white">Login</Link>

                }
            </div>
        </nav>
    );
};

export default Navbar;