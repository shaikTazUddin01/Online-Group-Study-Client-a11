import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = ({ children }) => {
  const navItem = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/assignment'}>Assignments</NavLink></li>
    <li><NavLink to={'/createassignment'}>Create Assignments</NavLink></li>
    <li><NavLink to={'/login'}>Login</NavLink></li>
  </>
  return (
    <div className="navbar bg-[var(--bg-primary)] text-white font-bold px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[var(--bg-primary)] rounded-box w-52 text-md">
            {navItem}
          </ul>
        </div>
        <div className="hidden lg:flex">
          <a className=" btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-md">
          {navItem}
        </ul>
      </div>
      <div className="navbar-end flex lg:hidden"> 
      <div className="">
          <a className=" btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;