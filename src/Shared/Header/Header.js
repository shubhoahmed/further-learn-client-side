import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import logo from '../../image/logo.png'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(true);
    if (!user?.uid) {

    }
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>


                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='w-10 rounded-md mr-1' src={logo} alt="" /><span className='lg:text-3xl lg:font-semibold'>FurtherLearn </span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text pr-3">{theme ? `Light` : `Dark`}</span>
                            <input type="checkbox" className="toggle toggle-accent" checked={theme} onChange={() => setTheme(p => !p)} />
                        </label>
                    </div></li>

                </ul>
            </div>
            <div className="navbar-end">

                <div className="dropdown dropdown-end">
                    {
                        !user?.auth?.currentUser?.uid && <Link to={'/login'} className="bg-black py-2 px-5 font-bold text-white  lg:block rounded-md ">Login</Link>

                    }
                    {
                        user?.auth?.currentUser?.uid && <div className='relative group'> <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                            <div className="w-10 rounded-full">
                                {user?.auth?.currentUser?.photoURL ? < img src={user?.auth?.currentUser?.photoURL} alt='' /> : <img src='https://www.pngkey.com/png/detail/114-1149847_avatar-unknown-dp.png' alt='' />}

                            </div>
                        </label>  <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><button onClick={handleLogOut}>Logout</button></li>
                            </ul>
                            <div className='absolute top-10 right-5 hidden group-hover:block px-3 py-2 '>
                                <p>{user?.auth?.currentUser?.displayName}</p>
                            </div>
                        </div>

                    }

                </div>
            </div>

        </div>
    );
};

export default Header;