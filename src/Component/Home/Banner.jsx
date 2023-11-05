import React from 'react';
import BannerImg from '../../assets/img/banner/banner_1.jpg'

const Banner = () => {
    return (
        <div className='bg-cover h-[500px] bg-fixed' style={{ backgroundImage: `url(${BannerImg})` }}>
            <div className='bg-[#0d0d0d9c] bg-cover h-[500px] '>
                <div className='justify-center items-center flex h-full'>
                    <div className='w-2/3 px-20 '>
                        <p className='text-white text-md tracking-widest mb-2 '>The Gole Of The Education is The Advancement Of Knowledge</p>
                        <h1 className='text-white text-6xl font-bold'>
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