import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';
// import AOS from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../../Provider/AuthProvider';
const Feature = () => {
    const {darkTheme}=useContext(AuthContext)
    const [card,setCard]=useState([])
    useEffect(()=>{
        axios.get('https://online-group-study-server-kappa.vercel.app/createAssignment')
        .then(res=>setCard(res.data))
    },[])
    // aos animation
    AOS.init();
    return (
        <div className={'max-w-7xl mx-auto my-20' }
        data-aos="fade-up"
        >
            <h1 className='text-5xl font-bold text-center'>Feature Section</h1>
            <div className="bg-[var(--bg-primary)] h-[3px] mt-4 w-[30%] md:w-[15%] lg:w-[10%] mx-auto"></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 px-2'>
               {card?.slice(-3)?.map(item=><FeatureCard key={item?._id} item={item}></FeatureCard>)}
            </div>
        </div>
    );
};

export default Feature;