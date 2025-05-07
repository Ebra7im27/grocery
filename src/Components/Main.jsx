import React, { useRef } from 'react';
import NavBar from './NavBar';
import '../Styles/Main.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import MainOne from "../assets/onePhoto.jpg";
import MainTwo from "../assets/twoPhoto.jpg";
import MainThree from "../assets/threePhoto.jpg";
import MainFour from "../assets/fourPhoto.jpg";
import MainFive from "../assets/fivePhoto.jpg";

function Main() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div>
      <div
        style={{
          height: "100dvh",
          position: "relative",
        }}
      >
        <NavBar />
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
              <img
                src={MainOne}
                alt="ImageToDescribeTheSite"
                className="full-slide-image"
                loading="lazy"
              />
          </SwiperSlide>
          <SwiperSlide>
          <img
                src={MainTwo}
                alt="Full SlideImage"
                className="full-slide-image"
                loading="lazy"
              />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={MainThree}
              alt="Full SlideImage"
              className="full-slide-image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={MainFour}
              alt="Full SlideImage"
              className="full-slide-image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={MainFive}
              alt="Full SlideImage"
              className="full-slide-image"
              loading="lazy"
            />
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Main;