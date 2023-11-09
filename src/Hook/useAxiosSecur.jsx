import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';


const AxiosSecure = axios.create({
    baseURL: 'online-group-study-server-kappa.vercel.app',
    withCredentials: true
})

const useAxiosSecur = () => {
    const navigate=useNavigate()
    const { handleSignOut } = useAuth()
    useEffect(() => {
        AxiosSecure.interceptors.response.use((res) => {
            return res
        }, (err) => {
            console.log("error interseptop", err.response);
            if (err.response.status === 401 || err.response.status === 403) {
                handleSignOut()
                    .then(() => {
                       navigate('/login')
                    }).catch(err => alert(err))
            }
        })
    }, [handleSignOut,navigate])

    return AxiosSecure;
};

export default useAxiosSecur;