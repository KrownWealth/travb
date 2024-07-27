"use client"
import { cn, ThemeSwitcher } from '@/lib'
import { Europa_Bold_Regular, EuropaNuova_Bold_Regular } from '@/lib/fonts'
import { ChevronUp } from 'lucide-react'
import React from 'react'
import { BsFacebook, BsTwitterX, BsLinkedin } from 'react-icons/bs'


const FooterNav = () => {
  return (
    <footer className='relative bottom-0 w-full bg-black text-white items-center justify-center border-t-2'>
      
      <div className="container flex flex-col gap-4 sm:flex-row sm:justify-between items-center justify-center lg:px-12 py-10 sm:py-20 ">
          <div className='flex gap-2'> 
          <BsFacebook className='h-5 w-5 '/>
          <BsTwitterX className='h-5 w-5' />
          <BsLinkedin className='h-5 w-5' />
          </div>
            
        
          <p className={cn('text-lg flex items-center justify-center font-bold', Europa_Bold_Regular)}><span>Developed by&nbsp;</span>
          Leodaa&apos;s Web Solutions</p>
         
        <div className='flex gap-4 items-center justify-center'>
              <ThemeSwitcher />
              <button className='flex items-end justify-end rounded-lg p-2 border cursor-pointer bg-white text-black'>
                <ChevronUp /></button>
            </div>
       
      </div>
      
    </footer>
  )
}

export default FooterNav
