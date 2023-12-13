import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Shared/Navbar';
import Footer from '../Component/Shared/Footer';
import ScrollToTop from '../Component/ScrollToTop/ScrollToTop';

const MainLayout = () => {
    const top=()=>{
        window.scrollTo(0,0)
    }
    return (
        <div className='max-w-[1400px] mx-auto bg-slate-50'>
            <Navbar></Navbar>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <div>
                {/* <button className='btn btn-primary absolute right-0 rounded-[50%]' onClick={top}>top</button> */}
                <ScrollToTop></ScrollToTop>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;