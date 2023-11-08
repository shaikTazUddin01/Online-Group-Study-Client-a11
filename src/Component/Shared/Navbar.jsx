import { Link, NavLink, useNavigate } from "react-router-dom";
import './Navbar.css'
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import logo from '/vite.svg'

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext)
  const [open, setopen] = useState(false)
  // console.log(user)
  const handleLogOut = () => {
    handleSignOut()
      .then(() => {
        Swal.fire({
          title: 'SuccessFully Sign Out!',
          icon: 'warning'
          // confirmButtonText: 'Cool'
        })

      }).catch((error) => {
        Swal.fire({
          title: 'Something is wrong Please try again',
          icon: 'error'
          // confirmButtonText: 'Cool'
        })
      });
  }
  const navItem = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/assignment'}>Assignments</NavLink></li>

    {
      user &&
      <>
        <li><NavLink to={'/createassignment'}>Create Assignments</NavLink></li>
        <li><NavLink to={'/submitedAssingment'}>Submitted Assignments</NavLink></li>
        <li><NavLink to={'/myAssignments'}>My Assignments</NavLink></li>
      </>
    }


    {
      user ?
        <div className="pl-2">
          <div className='flex flex-col lg:justify-center lg:items-center px-5 lg:px-0'>
            <abbr title="Click here to see profile" onClick={() => setopen(!open)} >
              <img src={user?.photoURL ? user.photoURL : ""} alt="img" className='w-10 h-10 border rounded-full'
              />
            </abbr>

            {
              open === true ?
                <div className='lg:mt-40 text-white border border-[#FFFFF]
                                 bg-[#2b2b2b] p-4 mt-10 
                             rounded-md z-20 ml-8 lg:ml-0 lg:mr-40 absolute
                            text-center shadow-lg shadow-[#858585]'>
                  <h1 className='' >{user?.displayName && user.displayName}</h1>
                  <h1 className='lowercase' >{user?.email && user.email}</h1>
                  <li onClick={handleLogOut} className="bg-[#2b3440] rounded-md 
                                    py-2 px-3 text-white mt-2
                                    ">LogOut</li>

                </div>
                :
                <div className='hidden absolute font-medium'>
                  <h1 className='' >{user?.displayName && user.displayName}</h1>
                  <h1 className='' >{user?.email && user.email}</h1>
                </div>
            }
          </div>
        </div>
        :
        <>
          <li><NavLink to={'/login'}>Sign In</NavLink></li>
          {/* <img src={userImg} alt="" className='w-10 h-10 rounded-full'/> */}

        </>
    }


  </>
  return (
    <div className="navbar bg-[var(--bg-primary)] text-white font-bold px-10 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[var(--bg-primary)] rounded-box w-52 text-md">
            {navItem}
          </ul>
        </div>
        <div className="hidden lg:flex w-1/4">
          <a className=" normal-case text-xl flex items-center justify-center gap-2">
            <img src={logo} alt="" /> <p>logo</p>
          </a>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex w-3/4">
        <ul className="menu menu-horizontal px-1 text-md">
          {navItem}
        </ul>
      </div>
      <div className="navbar-end flex lg:hidden">
        <div className="">
        <a className=" normal-case text-xl flex items-center justify-center gap-2">
            <img src={logo} alt="" /> <p>logo</p>
          </a>
          {/* <ToastContainer></ToastContainer> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;