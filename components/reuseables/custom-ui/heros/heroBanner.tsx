"use clent"

import React from 'react'
import { cn } from '@/lib'
import { Europa_Bold, Europa_Bold_Regular } from '@/lib/fonts'
import ExploreButton from '../buttons/exploreBtn'


function Hero() {
  return (
    <section>
      <div className={cn('z-40 text-white')}>
        <h1 className={cn('items-center pb-4 text-center text-2xl sm:text-5xl font-bold uppercase', Europa_Bold)}>
          Travel Inspiration for the People
        </h1>
        <p className={cn('text-lg pb-12 px-8 text-center items-center',Europa_Bold_Regular)}>
          Explore breathtaking destinations, dream of new adventures, and
          discover the beauty of the world.
        </p>
       <ExploreButton bgColor='#000000' textColor='#ffffff' width='20rem' textSize='30px' btnText='Start Exploring'/> 
      </div>
    </section>
  )
}

export default Hero
