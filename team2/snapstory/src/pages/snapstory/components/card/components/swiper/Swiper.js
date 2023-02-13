import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default () => {
  return (
    <ImgWrap>
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </ImgWrap>
  );
};
const ImgWrap = styled.div`
  overflow: hidden;
  width: 100px;
  margin-right: 10px;
  aspect-ratio: 3 / 4;
  border-radius: 5px;
  .swiper {
    aspect-ratio: 3 / 4;
  }
  .swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, 
  .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 2px;
    width: 5px;
    height: 5px;
  }
  .swiper-pagination-bullet-active {
    transform: scale(1.5);
    background: rgba(0, 0, 0, 0.7);
    transition: all 0.5s;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;