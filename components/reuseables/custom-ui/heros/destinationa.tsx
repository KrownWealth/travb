import React from 'react';
import { cn } from '@/lib';
import { Europa_Bold, Europa_Bold_Regular } from '@/lib/fonts';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

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

      <div className='grid grid-cols-1 sm:grid-cols-5 gap-4'>
        {destinations.map((dest, index) => (
          <Card key={index} className="relative h-64 overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src={dest.img}
                alt={dest.title}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <CardContent className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
              <p className="text-white text-xl font-bold">{dest.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default TopDestinations;
