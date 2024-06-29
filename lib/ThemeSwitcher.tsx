'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { BsSun,BsMoonFill } from 'react-icons/bs'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='flex items-end justify-end rounded-lg p-2 border cursor-pointer'
    >
      {theme === 'dark' ? (
        <BsSun className='h-5 w-5 text-orange-300' />
      ) : (
        <BsMoonFill className='h-5 w-5 text-slate-700' />
      )}{' '}
    </button>
  )
}
export default ThemeSwitcher
