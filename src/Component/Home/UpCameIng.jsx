import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.css';
import ecommerce from '../../assets/img/upcomeing/ecommerce.jpg'
import ebook from '../../assets/img/upcomeing/ebook.jpg'
import enventory from '../../assets/img/upcomeing/eventor.jpg'
import gress from '../../assets/img/upcomeing/gress.jpg'
import qr from '../../assets/img/upcomeing/QRCode.png'
import translator from '../../assets/img/upcomeing/translator.jpg'

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
// import AOS from 'aos';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../../Provider/AuthProvider';
const UpCameIng = () => {
  const { darkTheme } = useContext(AuthContext)
  // ation
  AOS.init();
  return (
    <div className='pb-20 p-3' data-aos="fade-up">
      <div>
        <h1 className='text-5xl font-bold text-center mt-10 md:mt-0'>Upcoming Assignment</h1>
        <div className="bg-[var(--bg-primary)] h-[3px] mt-4 w-[30%] md:w-[20%] lg:w-[15%] mx-auto "></div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
        data-aos-delay="280"
      >
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >

          <SwiperSlide>
            <div className={darkTheme ? "card bg-[#343434]  shadow-lg hover:shadow-xl shadow-[var(--bg-primary)] hover:shadow-[var(--bg-primary)]" :
              "card bg-base-100  shadow-lg hover:shadow-xl shadow-[var(--bg-primary)] hover:shadow-[var(--bg-primary)]"
            } >
              <div >
                <figure className='rounded-t-2xl'><img src={ebook} alt="Shoes" className='h-[250px] w-full' /></figure>
              </div>
              <div className="card-body ">
                <h2 className="text-2xl font-semibold">
                  E-Book <span></span>
                </h2>
                <p>
                </p>

                <p>Ebooks are digital counterparts to traditional books, offering convenient and portable access to a vast world of literature at your fingertips.</p>

                <div className="card-actions justify-between">
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={darkTheme ? "card bg-[#343434]  shadow-lg hover:shadow-xl shadow-[var(--bg-primary)] hover:shadow-[var(--bg-primary)]" :
              "card bg-base-100  shadow-lg hover:shadow-xl shadow-[var(--bg-primary)] hover:shadow-[var(--bg-primary)]"
            } >
              <div>
                <figure className='rounded-t-2xl'><img src={translator} alt="Shoes" className='h-[250px] w-full' /></figure>
              </div>
              <div className="card-body">
                <h2 className="text-2xl font-semibold">
                  Language Transletor
                </h2>
                <p>Language translators bridge communication gaps by converting text or speech from one language to another, fostering global understanding and connectivity.
                </p>

                <div className="card-actions justify-between">
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={darkTheme ? "card bg-[#343434]  shadow-lg hover:shadow-xl shadow-[var(--bg-primary)] hover:shadow-[var(--bg-primary)]" :
              "card bg-base-100  shadow-lg hover:shadow-xl shadow-[var(--bg-primary)] hover:shadow-[var(--bg-primary)]"
            } >
              <div >
                <figure className='rounded-t-2xl'><img src={ecommerce} alt="Shoes" className='h-[250px] w-full' /></figure>
              </div>
              <div className="card-body">
                <h2 className="text-2xl font-semibold">
                  Ecommerce
                </h2>
                <p>
                  Ecommerce revolutionizes shopping, allowing people to buy and sell products or services online, anytime, anywhere, making commerce as easy as a click.
                </p>

                <div className="card-actions justify-between">
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={darkTheme ? "card bg-[#343434]  shadow-lg hover:shadow-xl shadow-[var(--bg-primary)] hover:shadow-[var(--bg-primary)]" :
              "card bg-base-100  shadow-lg hover:shadow-xl shadow-[var(--bg-primary)] hover:shadow-[var(--bg-primary)]"
            } >
              <div >
                <figure className='rounded-t-2xl'><img src={enventory} alt="Shoes" className='h-[250px] w-full' /></figure>
              </div>
              <div className="card-body">
                <h2 className="text-2xl font-semibold">
                  Inventory management
                </h2>
                <p>
                  Inventory management systems streamline and organize the tracking, ordering, and monitoring of a business's goods, ensuring efficient stock control and operational smoothness.
                </p>

                <div className="card-actions justify-between">
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={darkTheme ? "card bg-[#343434]  shadow-lg hover:shadow-xl shadow-[var(--bg-primary)] hover:shadow-[var(--bg-primary)]" :
              "card bg-base-100  shadow-lg hover:shadow-xl shadow-[var(--bg-primary)] hover:shadow-[var(--bg-primary)]"
            } >
              <div >
                <figure className='rounded-t-2xl'><img src={qr} alt="Shoes" className='h-[250px] w-full' /></figure>
              </div>
              <div className="card-body">
                <h2 className="text-2xl font-semibold">
                  QR code reader
                </h2>
                <p>
                  A QR code reader is a mobile app or device feature that scans and interprets QR codes, instantly translating the encoded information into actionable data, such as website links, contact details, or other digital content.
                </p>

                <div className="card-actions justify-between">
                </div>
              </div>
            </div>
          </SwiperSlide>


        </Swiper>
      </div>
    </div>
  );
}
export default UpCameIng;