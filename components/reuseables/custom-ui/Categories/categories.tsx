import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CategoryCard from '../blogCards/categoryCard'
import SubCategoryCard from '../blogCards/subCategoryCard'

function BlogCategories() {
  const subCategory = [
    {
      title: 'Explore Nature',
      img: '/images/bird.svg',
      date: '21 March, 2021'
    },
    {
      title: 'Explore Nature',
      img: '/images/bird.svg',
      date: '21 March, 2021'
    },
    {
      title: 'Explore Nature',
      img: '/images/bird.svg',
      date: '21 March, 2021'
    }
  ]

  return (
    <section className='container my-20'>
      <Link href=''> Category </Link>
      <div className='flex flex-row gap-8'>
        <Card className='basis-3/5 p-6 hidden sm:block'>
          <div className='flex flex-row gap-8'>
            <div className='basis-3/5 '>
              <CategoryCard
                blogImg='/images/image.svg'
                title='Explore Nature'
                excerpt='Lorem'
              />
            </div>

            <div className='basis-2/5'>
              {subCategory.map((sub, index) => (
                <SubCategoryCard
                  key={index}
                  blogImg={sub.img}
                  title={sub.title}
                  publishDate={sub.date}
                />
              ))}
            </div>
          </div>
        </Card>

        <div className='border p-6 sm:basis-2/5 basis-full'>
          {subCategory.map((sub, index) => (
            <SubCategoryCard
              key={index}
              blogImg={sub.img}
              title={sub.title}
              publishDate={sub.date}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogCategories
