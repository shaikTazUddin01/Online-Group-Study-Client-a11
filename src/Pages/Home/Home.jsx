import React, { useEffect } from 'react';
import Banner from '../../Component/Home/Banner';
import Faq from '../../Component/Home/Faq';
import Feature from '../../Component/Home/Feature';
import UpCameIng from '../../Component/Home/UpCameIng';


const Home = () => {
    // useEffect(()=>{
      
    // },[])
    return (
        <div className='bg-slate-100'>
            <Banner ></Banner>
            <Feature ></Feature>
            <Faq></Faq>
            <UpCameIng></UpCameIng>
        </div>
    );
};

export default Home;