import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './json/**/*.json',
    './views/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '1rem'
      },
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      screens: {
        xs: { max: '380px' },
        sm: '600px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      colors: {
        travbBlack: '#000000',
        travbMuted: '#121416',
        travbWhite: '#FFFFFF',
        travbGrey: '#6C757D',
        travbPurple: '#7A65E1',
        travbBtnBg: '#7F7D85',
        travbOpacity: '#D9D9D9',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {}
        },
        dark: {
          layout: {},
          colors: {}
        }
      }
    })
  ]
} satisfies Config

export default config
