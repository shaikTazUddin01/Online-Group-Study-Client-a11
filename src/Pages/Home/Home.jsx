import React, { useEffect } from 'react';
import Banner from '../../Component/Home/Banner';
import Faq from '../../Component/Home/Faq';
import Feature from '../../Component/Home/Feature';


const Home = () => {
    // useEffect(()=>{
      
    // },[])
    return (
        <div>
            <Banner ></Banner>
            <Feature ></Feature>
            <Faq></Faq>
        </div>
    );
};

export default Home;