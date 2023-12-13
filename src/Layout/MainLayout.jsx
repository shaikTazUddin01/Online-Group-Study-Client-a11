import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Shared/Navbar';
import Footer from '../Component/Shared/Footer';
import ScrollToTop from '../Component/ScrollToTop/ScrollToTop';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const MainLayout = () => {
    const{darkTheme}=useContext(AuthContext)
    // const top=()=>{
    //     window.scrollTo(0,0)
    // }
    return (
        <div className={darkTheme?'bg-[#202020] text-white':"bg-slate-50"}>
            <div className='max-w-[1400px] mx-auto '>
            <Navbar></Navbar>
            <div className='my-0'>
                <Outlet></Outlet>
            </div>
            <div>
                {/* <button className='btn btn-primary absolute right-0 rounded-[50%]' onClick={top}>top</button> */}
                <ScrollToTop></ScrollToTop>
            </div>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default MainLayout;