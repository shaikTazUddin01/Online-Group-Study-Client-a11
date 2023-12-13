import { Link, NavLink, useNavigate } from "react-router-dom";
import './Navbar.css'
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import logo from '/logo.png'
import { MdLightMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Navbar = () => {
  const { user, handleSignOut,setTheme,darkTheme } = useContext(AuthContext)
  const [open, setopen] = useState(false);
  const [hover, sethover] = useState(false)


// change theme
const [colors, setcolor] = useState(false)
    setTheme(colors)
    console.log('theme:',darkTheme)
    console.log(colors)
    const handleTheme = () => {
        setcolor(!colors)
    }







  const onHover = () => {
    sethover(!hover)
  }
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
        <div className="pl-2" onMouseEnter={onHover} onMouseLeave={onHover}>

          <div className='flex flex-col lg:justify-center lg:items-center px-5 lg:px-0'  >
            {/* <abbr title={user.displayName} > */}
            <img src={user?.photoURL ? user.photoURL : ""} alt="img" className='w-10 h-10 border rounded-full' onClick={() => setopen(!open)}
            />
            {/* </abbr> */}

            {
              hover === true ?
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
{/* change theme */}




    <p onClick={handleTheme} className="bg-transparent swap swap-rotate
     hover:bg-transparent p-0 mt-[6px] -ml-24 lg:ml-4  ">
      {!colors ?
        <div className="flex justify-center items-center">
          <MdLightMode className="text-2xl text-black"></MdLightMode>
        </div>

        :
        <div className="flex justify-center items-center ">
          <CiLight className="text-2xl "></CiLight>
        </div>
      }

    </p>







  </>
  return (
    <div className="navbar bg-[var(--bg-primary)] text-white font-bold px-10 ">
      <div className="navbar-start lg:w-[20%]">
        <div className="dropdown -ml-5">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-[var(--bg-primary)] rounded-box w-52 text-md z-10">
            {navItem}
          </ul>
        </div>
        <div className="hidden lg:flex">
          <a className=" normal-case text-xl flex items-center justify-center gap-2" href="/">
            <img src={logo} alt="" className="mt-2 w-[130px]" />
          </a>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex w-[80%] ">
        <ul className="menu menu-horizontal px-1 text-md">
          {navItem}
        </ul>
      </div>
      <div className="navbar-end flex lg:hidden">
        <div className="">
          <a className=" normal-case text-xl flex items-center justify-center gap-2" href="/">
            <img src={logo} alt="" className="w-[130px] mt-3"/> <p></p>
          </a>
          {/* <ToastContainer></ToastContainer> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;