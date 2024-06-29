'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import { BlogType } from '@/types'
import { cn } from '@/lib'

interface SubCategoryProps {
  blogImg: string
  title: string
  publishDate: string
  header?: string
  contentPadding?: string
}

const SubCategoryCard: React.FC<SubCategoryProps> = ({
  blogImg,
  title,
  publishDate,
  header,
  contentPadding
}) => {
  return (
    <Card className='mb-8 w-full cursor-pointer rounded-none border-none bg-white text-black dark:bg-black dark:text-white'>
      <CardContent
        className={cn('flex flex-row gap-4 p-0')}
        style={{ padding: contentPadding }}
      >
        <div className='relative h-36 w-1/2'>
          <Image
            alt='Blog Image'
            className='h-full w-full object-cover'
            src={blogImg}
            width={50}
            height={50}
          />
        </div>
        <div>
          <h3 className='py-4 text-3xl font-bold'>{title}</h3>
          <p className='text-lg text-gray-700 dark:text-gray-300'>
            {publishDate}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default SubCategoryCard
