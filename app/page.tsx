import {
  Blogs,
  HeroSlider,
  TopDestinations,
  Trips
} from '@/components/reuseables'

export default function Home() {
  return (
    <>
     
      {/* <Hero /> */}
      <HeroSlider />
      <Blogs />
      <Trips />
      <TopDestinations />
      {/* <BlogCategories /> */}
    </>
  )
}
