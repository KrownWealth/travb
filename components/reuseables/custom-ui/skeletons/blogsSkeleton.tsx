

"use client";

import React from 'react';
import { Card } from '@/components/ui/card';

const SkeletonCard = () => (
  <Card>
    <div className="relative w-full h-[200px] bg-gray-200 rounded-lg"></div>
    <div className="h-[300px] space-y-4 mt-4 p-2">
      <div className="flex justify-between items-center">
        <div className="rounded-full w-12 h-12 bg-gray-200"></div>
        <div className="w-24 h-6 bg-gray-200 rounded-lg"></div>
      </div>
      <div className="space-y-2">
        <div className="h-12 bg-gray-200 rounded-lg pb-2"></div>
        <div className="h-24 bg-gray-200 rounded-lg flex-1 "></div>
        <div className="h-6 w-24 pt-4 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  </Card>
);

const BlogsLoading = () => {
  return (
    <div className="container gap-8 my-20">
      <div className="animate-pulse grid gap-4 grid-cols-1 sm:grid-cols-3">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
};

export default BlogsLoading;
