"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { CiShare2 } from 'react-icons/ci';
import { User } from "@nextui-org/react";
import { ArrowRight } from 'lucide-react';
import { BlogType } from '@/types';

interface BlogCardProps extends BlogType {
  disableanimation?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  date,
  title,
  featuredImage,
  author,
  excerpt,
  disableanimation = false, 
}) => {

// set default image if featured image IS NOT PRESENT, same for author avatar, and author name

const defaultImageUrl = '/images/man-hiking.svg';
 
// const imageUrl = featuredImage?.node?.mediaDetails?.sizes?.[0]?.sourceUrl ?? defaultImageUrl;
//  const imageWidth = imageUrl === defaultImageUrl ? 500 : featuredImage?.node?.mediaDetails?.sizes?.[0]?.width || 500;
//  const imageHeight = imageUrl === defaultImageUrl ? 200 : featuredImage?.node?.mediaDetails?.sizes?.[0]?.height || 200;

  //const authorName = author?.node?.name || 'Unknown Author';
const authorAvatarUrl = author?.node?.avatar?.url || '/images/image.svg'; 

  return (
    <Card className={`rounded-lg overflow-hidden w-full shadow-md cursor-pointer border ${disableanimation ? 'no-animation' : ''}`}>
      <CardHeader className='p-0'>
        <div className="relative w-full h-18">
          <Image
            alt={title}
            className="h-full w-full"
            src={defaultImageUrl}
            width={100}
            height={100}
           
            priority
          />
        </div>
      </CardHeader>
      
      <CardContent className="p-8" style={{height: '300px'}}>
        <div>
          <div className='flex justify-between'>
            <User
            name={author?.node?.name || 'Unknown Author'}   
              avatarProps={{
                src: authorAvatarUrl
              }}
            />
            <div className='flex pt-3 text-sm'>
              <p>{new Date(date).toLocaleDateString()}</p>&nbsp;&nbsp;&nbsp;
              <p className='flex text-xs'><span className='mt-1 mr-1'><CiShare2 /></span>1K shares</p>
            </div>
          </div>
          <h3 className="text-xl font-bold py-2">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm"
           dangerouslySetInnerHTML={{ __html: excerpt }} />
        </div>
      </CardContent>
     
      <CardFooter className='ml-2'>
        <button className='flex font-bold'>View more &nbsp;&nbsp; <span><ArrowRight /></span></button>
      </CardFooter>
    </Card>
  );
}

export default BlogCard;
