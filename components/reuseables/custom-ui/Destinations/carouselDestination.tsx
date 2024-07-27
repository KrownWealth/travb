"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import '../../../../styles/autoplay-carousel.css'
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';



const AutoplayCarousel = () => {

  const destinations = [
    {
      title: "Explore Nature",
      img: "/images/bird.svg",
    },
    {
      title: "Explore Nature",
      img: "/images/bird.svg",
    },
    {
      title: "Explore Nature",
      img: "/images/bird.svg",
    },
    {
      title: "Explore Nature",
      img: "/images/bird.svg",
    },
    {
      title: "Explore Nature",
      img: "/images/bird.svg",
    },
  ];
  return (
    <section className='container my-20'>
      <div className="featuredDetinations my-10">
        <Swiper
          // spaceBetween={30}
          // slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          breakpoints={{
            300: {
              slidesPerView: 1.5,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1920: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          speed={2000}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          modules={[Autoplay]}
          className="swiper mySwiper"
        >
          {destinations.map((destination) => (
            <SwiperSlide key={destination.title} className="swiper-slide">
              <Link href="#" className="group" prefetch={false}>
                <Card
                  className="relative flex overflow-hidden bg-[#222e39] h-[240px] text-white shadow-md items-center justify-center"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={destination.img}
                      alt={destination.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="w-full h-full"
                    />
                  </div>
                  <CardContent className="relative z-10 flex items-center justify-center h-full">
                    <p className="text-white text-xl font-bold">{destination.title}</p>
                  </CardContent>
                </Card>
              </Link>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

  );
}

export default AutoplayCarousel;
