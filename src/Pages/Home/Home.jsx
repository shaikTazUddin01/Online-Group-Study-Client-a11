import React, { useContext, useEffect } from 'react';
import Banner from '../../Component/Home/Banner';
import Faq from '../../Component/Home/Faq';
import Feature from '../../Component/Home/Feature';
import UpCameIng from '../../Component/Home/UpCameIng';
import { AuthContext } from '../../Provider/AuthProvider';


const Home = () => {
    const {darkTheme}=useContext(AuthContext)
    // useEffect(()=>{
      
    // },[])
    return (
        <div className={darkTheme?'bg-[#202020] text-white':'bg-slate-100'}>
            <Banner ></Banner>
            <Feature ></Feature>
            <Faq></Faq>
            <UpCameIng></UpCameIng>
        </div>
    );
};

export default Home;