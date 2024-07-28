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

const AutoplayCarousel = () => {

  const destinations = [
    { title: "Round The World Travel", img: "/images/round the world travel.jpg" },
    { title: "Beach Vacation", img: "/images/beach-vacation.jpg" },
    { title: "Island Vacation", img: "/images/island vacation.jpg" },
    { title: "Moscow", img: "/images/moscow.jpg" },
    { title: "Mexico", img: "/images/mexico-city.jpg" },
    { title: "Sao-Paulo", img: "/images/sao-paulo.jpg" },
    { title: "Tokyo", img: "/images/Tokyo.jpg" },
    { title: "Delhi", img: "/images/delhi.jpg" },
    { title: "Beijing", img: "/images/Beijing ancient china.jpg" },
    { title: "Seoul", img: "/images/Seoul-South_Korea.jpg" },
    { title: "Jakarta Indonesia", img: "/images/jakarta indonesia.jpg" }
  ];

  return (
    <section className='container my-20'>
      <div className="featuredDetinations my-10">
        <Swiper
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
                <Card className="relative overflow-hidden h-[240px] text-white shadow-md w-[350px] border-0">
                  <div className="absolute inset-0">
                    <Image
                      src={destination.img}
                      alt={destination.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black opacity-10"></div>
                  </div>
                  <CardContent className="relative z-10 flex items-center justify-center h-full">
                    <p className="text-white text-2xl font-bold">{destination.title}</p>
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
