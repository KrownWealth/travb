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

  const defaultImageUrl = '/images/man-hiking.svg'; 
  const getImageUrl = () => {
    if (featuredImage?.node?.mediaDetails?.sizes) {
      const sizes = featuredImage.node.mediaDetails.sizes;
      const largeImage = sizes.find(size => size.width >= 1024);
      return largeImage ? largeImage.sourceUrl : defaultImageUrl;
    }
    return defaultImageUrl;
  };

  const imageUrl = getImageUrl();
  const authorAvatarUrl = author?.node?.avatar?.url || '/images/default-avatar.jpg'; 
  
  return (
    <Card className={`rounded-lg overflow-hidden w-full shadow-md cursor-pointer border ${disableanimation ? 'no-animation' : ''}`}>
      <CardHeader className='p-0'>
        <div className="relative w-full h-48">
          <Image
            alt={title}
            src={imageUrl}
            quality={100} 
            layout="fill" 
            objectFit="cover" 
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
          <p className="text-gray-700 dark:text-gray-300 text-sm" dangerouslySetInnerHTML={{ __html: excerpt }} />
        </div>
      </CardContent>
     
      <CardFooter className='ml-2'>
        <button className='flex font-bold'>View more &nbsp;&nbsp; <span><ArrowRight /></span></button>
      </CardFooter>
    </Card>
  );
}

export default BlogCard;
