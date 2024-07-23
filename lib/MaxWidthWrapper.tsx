'use client'

import { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from './theme-Provider'
import { TopNavBar, FooterNav } from '@/components/reuseables'


const MaxWidthWrapper = ({
  className,
  children
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div
      className={cn(
        'w-full max-w-screen-2xl items-center',
        className
      )}
    >
      <ThemeProvider
        attribute='class'
        defaultTheme='dark'
        themes={['light', 'dark']}
        enableSystem
        disableTransitionOnChange
      >
        <NextUIProvider>
           <TopNavBar />
         <main className="h-auto"> {children}</main>
          <FooterNav />
        </NextUIProvider>
      </ThemeProvider>
    </div>
  )
}

export default MaxWidthWrapper
