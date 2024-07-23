"use client"

import React from 'react';
import { cn } from '@/lib';
import { Europa_Bold, Europa_Bold_Regular } from '@/lib/fonts';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function TopDestinations() {
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
      <h3 className={cn('items-start pb-4 text-start text-sm sm:text-lg font-bold capitalize', Europa_Bold)}>Top Destination</h3>
      <p className={cn('pb-8', Europa_Bold_Regular)}>Tick one more destination off of your bucket list with one of our most popular vacations in 2022</p>

      <Swiper
        slidesPerView={'auto'}
        spaceBetween={40}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        pagination={{ clickable: true }}
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
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1920: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper swiper-stories"
      >
        {destinations.map((dest, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <Link href="#" className="group" prefetch={false}>
              <Card key={index} className="relative h-64 overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={dest.img}
                    alt={dest.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="w-full h-full"
                  />
                </div>
                <CardContent className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
                  <p className="text-white text-xl font-bold">{dest.title}</p>
                </CardContent>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default TopDestinations;
