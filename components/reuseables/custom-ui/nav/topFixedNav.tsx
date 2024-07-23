'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { ThemeSwitcher } from '@/lib'
import { RiMenu2Fill } from 'react-icons/ri'
import { FaTimes } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import { useRouter, usePathname } from 'next/navigation'

const TopNavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setScrolled] = useState(false)
  const router = useRouter();
  const pathname = usePathname();


  const menuItems = [
    'Destination',
    'Food',
    'Wellbeing',
    'Sport',
    'Family',
    'Lifestyle'
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const isHomePage = pathname === '/';

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 flex h-14 w-full items-center justify-center  font-bold
         ${isHomePage ? (isScrolled ? 'bg-black text-white' : 'bg-black bg-opacity-25') : 'bg-black text-white'} cursor-pointer transition-colors duration-300`}
    >
      <nav className='flex-no-wrap container z-40 flex h-24 w-full flex-row items-center justify-between gap-4 sm:px-12'>
        {/* Mobile nav toggle button */}
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className='justify-start sm:hidden'
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <FaTimes className='w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center p-3' /> :
            <RiMenu2Fill className='w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center p-3' />}
        </button>
        {isMenuOpen && (
          <nav
            className={`absolute left-0 right-0 top-16 py-8 uppercase bg-white text-black shadow-md transition-transform duration-300 sm:hidden ${isMenuOpen ? 'translate-y-0 transform' : '-translate-y-full transform'}`}
          >
            <ul>
              {menuItems.map((item, index) => (
                <Link
                  key={`${item}-${index}`}
                  className='block w-full p-4'
                  href='#'
                >
                  <li className='border-b'>{item}</li>
                </Link>
              ))}
            </ul>
          </nav>
        )}
        {/*mobile menu end */}
        <Link href='/' className='flex items-start justify-start'>
          <BiWorld className='h-12 w-12 text-white' />
          <span className='ml-1 mt-2 text-2xl text-white'>
            <strong>The TravBlog</strong>
          </span>
        </Link>
        {/* hide this on desktop*/}
        <nav>
          <ul className='hidden gap-4 uppercase sm:flex text-white'>
            {menuItems.map((item, index) => (
              <Link
                key={`${item}-${index}`}
                className='flex cursor-pointer'
                href='#'
              >
                <li className=''>{item}</li>
              </Link>
            ))}
          </ul>
        </nav>
        {/* end */}
        <div className='flex gap-4'>
          <BsSearch className='mt-3 hidden font-bold sm:flex' />
          <Button className={`hidden cursor-pointer rounded-none text-white ${isScrolled ? 'bg-white text-black' : 'bg-travbBlack'} font-bold uppercase sm:flex`}>
            Start Exploring
          </Button>
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  )
}

export default TopNavBar
