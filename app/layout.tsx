import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { cn, MaxWidthWrapper } from '@/lib'
import { Europa_Bold_Regular } from '@/lib/fonts'
import './globals.css'
import { FooterNav } from '@/components/reuseables'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

// export const metadata: Metadata = SeoMeta(0)

export const viewport: Viewport = {
  themeColor: '#F85009',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'font-san antialiase m-auto max-w-screen-2xl min-h-screen',
          Europa_Bold_Regular.className,
          inter.className
        )}
      >
        <MaxWidthWrapper>{children}</MaxWidthWrapper>
      </body>
    </html>
  )
}
