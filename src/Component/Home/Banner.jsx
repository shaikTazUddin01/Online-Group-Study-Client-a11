import React from 'react';
import BannerImg from '../../assets/img/banner/banner_1.jpg'
// import AOS from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
    // aos animation
    AOS.init();
    return (
        <div className='bg-cover h-[500px] md:bg-fixed' style={{ backgroundImage: `url(${BannerImg})` }}>
            <div className='bg-[#0d0d0d9c] bg-cover h-[500px] md:bg-fixed '>
                <div className='justify-center items-center flex flex-col h-full'>
                    <div className='w-full text-center
                     md:text-left md:px-10 lg:px-20'
                     data-aos="fade-up"
                     data-aos-duration="1500"
                        >
                        <p className='text-white text-md tracking-widest mb-2 '>The Gole Of The Education is The Advancement Of Knowledge</p>
                        <h1 className='text-white text-xl md:text-3xl lg:text-6xl font-bold lg:leading-[70px]'>
                            Take The First Step To <br />Knowledge With Us.
                        </h1>
                        <button className='rounded-md btn btn-primary mt-5 '>View Assignment</button>
                    </div>
                    <div className='w-1/3'></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;