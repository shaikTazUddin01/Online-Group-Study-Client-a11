import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Shared/Navbar';

const MainLayout = () => {
    return (
        <div className='max-w-[1400px] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>

        </div>
    );
};

export default MainLayout;