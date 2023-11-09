import React, { useEffect } from 'react';
import Banner from '../../Component/Home/Banner';
import Faq from '../../Component/Home/Faq';
import Feature from '../../Component/Home/Feature';
// import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Home = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div>
            <Banner></Banner>
            <Feature data-aos="flip-left"></Feature>
            <Faq></Faq>
        </div>
    );
};

export default Home;