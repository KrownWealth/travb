

"use client";

import React from 'react';

const SingleBlogsLoading = () => {
  return (
    <div className="container gap-8 my-20">
      <div className="animate-pulse flex flex-col gap-4">
        <div className="flex flex-col gap-4 animate-pulse">
        <div className="w-full lg:w-1/2 h-12 bg-gray-200"></div>
        <div className="w-12 h-6 bg-gray-200"></div>
      </div>
      <div className="w-full h-[300px] bg-gray-200 animate-pulse"></div>
      <div className="h-[400px] bg-gray-200 animate-pulse">
        <div className="w-full h-6 bg-gray-200"></div>
         <div className="w-full h-6 bg-gray-200"></div>
          <div className="w-full h-6 bg-gray-200"></div>
      </div>
      
      </div>
    </div>
  );
};

export default SingleBlogsLoading;
