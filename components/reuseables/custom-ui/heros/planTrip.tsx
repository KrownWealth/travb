import React from 'react'
import { cn } from '@/lib'
import style from './plantTip.module.css'
import ExploreButton from '../buttons/exploreBtn'
import { Europa_Bold, Europa_Bold_Regular } from '@/lib/fonts'

function Trips() {
  return (
    <section className={cn('container min-h-96 my-20', style.tripBg)}>
      <div className={cn('z-40 text-white', style.contentContainer)}>
         <h1 className={cn('items-center pb-4 text-center text-2xl sm:text-2xl font-bold uppercase', Europa_Bold)}>
          Richird Norton photorealistic rendering as real photos
        </h1>
        <p className={cn('text-lg pb-12 px-8 text-center items-center',Europa_Bold_Regular)}>
         Progressively incentivize cooperative systems through 
          technically sound functionalities. The credibly productivate seamless data.
        </p>
          <ExploreButton btnText='Start Planning Your Trip' bgColor='#ffffff' textColor='#000000' width='' textSize='1rem' />
      </div>

    </section>
  )
}

export default Trips
