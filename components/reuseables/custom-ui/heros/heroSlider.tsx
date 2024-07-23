"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { cn } from '@/lib';
import { Europa_Bold, Europa_Bold_Regular } from '@/lib/fonts';
import ExploreButton from '../buttons/exploreBtn';
import useFetchVideos from '@/lib/actions/fetchVideos';
import { VideoProps } from '@/types';

const HeroSlider = () => {
  const { videos, loading } = useFetchVideos();
  const [videoLoading, setVideoLoading] = useState(true);

  if (loading) {
    return (
      <div className="video-placeholder">
        <div className="placeholder-content">
          <h1 className={cn('text-2xl sm:text-5xl font-bold uppercase', Europa_Bold)}>
            Travel Inspiration for the People
          </h1>
          <p className={cn('text-lg pb-12 px-8', Europa_Bold_Regular)}>
            Explore breathtaking destinations, dream of new adventures, and
            discover the beauty of the world.
          </p>
          <ExploreButton bgColor='#000000' textColor='#ffffff' width='20rem' textSize='30px' btnText='Start Exploring' />
        </div>
      </div>
    );
  }

  return (
    <section className="heroBg">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper-container"
      >
        {videos.map((video: VideoProps) => (
          <SwiperSlide key={video.id} style={{ height: "100%"}}>
            <div className="video-wrapper">
              <video
                autoPlay
                muted
                loop
                playsInline
                onCanPlay={() => setVideoLoading(false)}
                style={{ height: "100%", backgroundSize: "cover"}}
              >
                <source src={video.url} type="video/mp4" />
              </video>
            </div>
            <div className="contentContainer">
              <h1 className={cn('text-xl sm:text-4xl font-bold uppercase pb-4', Europa_Bold)}>
                Travel Inspiration for the People
              </h1>
              <p className={cn('text-sm sm:text-lg pb-12 px-8', Europa_Bold_Regular)}>
                Explore breathtaking destinations, dream of new adventures, and
                discover the beauty of the world.
              </p>
              <ExploreButton bgColor='#000000' textColor='#ffffff' width='20rem' textSize='30px' btnText='Start Exploring' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSlider;
