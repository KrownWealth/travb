"use client"
import { cn, ThemeSwitcher } from '@/lib'
import { Europa_Bold_Regular, EuropaNuova_Bold_Regular } from '@/lib/fonts'
import { ChevronUp } from 'lucide-react'
import React from 'react'
import { BsFacebook, BsTwitterX, BsLinkedin } from 'react-icons/bs'


const FooterNav = () => {
  return (
    <footer className='w-full bottom-0 bg-black text-white px-4 py-10 sm:py-20 items-center justify-center border-t-2'>
      
      <div className="container flex flex-col gap-4 sm:flex-row sm:justify-between items-center justify-center">
          <div className='flex gap-2'> 
          <BsFacebook className='h-5 w-5 '/>
          <BsTwitterX className='h-5 w-5' />
          <BsLinkedin className='h-5 w-5' />
          </div>
            
        
          <p className={cn('text-lg', Europa_Bold_Regular)}>Developed by <span className={cn('uppercase font-bold', EuropaNuova_Bold_Regular)}>Leodaa's Web Solutions</span></p>
         
        <div className='flex gap-4 items-center justify-center'>
              <ThemeSwitcher />
              <button className='flex items-end justify-end rounded-lg p-2 border cursor-pointer bg-white text-black'><ChevronUp /></button>
            </div>
       
      </div>
      
    </footer>
  )
}

export default FooterNav
