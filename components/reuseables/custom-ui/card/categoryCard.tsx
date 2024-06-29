"use client"

import React from 'react'
import Image from 'next/image'
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'


interface CategoryProps{
  blogImg: string
  title: string
  excerpt: string
}

const CategoryCard: React.FC<CategoryProps>= ({ 
  blogImg,
  title,
  excerpt}) => {
  return (
    <Card className="rounded-none overflow-hidden w-full cursor-pointer">
      <CardHeader className='p-0'>
        <div className="relative w-full h-48">
          <Image
            alt="Blog Image"
            className="h-full object-cover"
            src={blogImg}
            width={100}
            height={100}
          />
        </div>
      </CardHeader>
      
         <CardContent className="p-8 space-y-6">
        <div>
          <h3 className="text-3xl font-bold py-4">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            {excerpt}
          </p>
        </div>
      </CardContent>
     
   
    <CardFooter className='ml-2'>
      <button className='flex font-bold '>View more &nbsp;&nbsp; <span><ArrowRight /></span></button></CardFooter>
   </Card>
  )
}

export default CategoryCard
