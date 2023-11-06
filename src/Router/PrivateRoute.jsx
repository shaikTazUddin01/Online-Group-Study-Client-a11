import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import loadingGif from '../assets/img/loading/Spinner-1s-200px.gif'
const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation()
    // const navigate=useNavigate()

    if (loader) {
        return (
            <div className='min-h-screen flex justify-center items-center'>
                <img src={loadingGif} alt="" />
            </div>
        )
    }

    if (user) {
        return children;
    }
    return <Navigate to={'/login'} state={location.pathname}></Navigate>


};

export default PrivateRoute;