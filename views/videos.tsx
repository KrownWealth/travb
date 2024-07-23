"use client"

import React from 'react'
import { VideoProps } from '@/types';
import { useFetchVideos } from '@/lib/actions';


const TestingVideo = () => {
  const { videos, loading } = useFetchVideos();

  if (loading) {
    return <div>Loading...</div>;
  }

 
  return (
    <div className="h-screen">
      <h1 className='text-black'>Displaying Video </h1>
     {videos.map((video: VideoProps) => (
        <video key={video.id} controls width={video.width}>
          <source src={video.url} type="video/mp4" />
        </video>
      ))}
    </div>
  );
}
export default TestingVideo