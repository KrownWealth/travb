/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'daisyui.com',
        port: '',
        pathname: '/images/stock/**'
      }
    ]
  }
}

export default nextConfig
