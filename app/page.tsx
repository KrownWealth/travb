import {
  AutoplayCarousel,
  Blogs,
  HeroSlider,
  // TopDestinations,
  Trips
} from '@/components/reuseables'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Blogs />
      <Trips />
      {/* <TopDestinations /> */}
    <AutoplayCarousel />
      {/* <BlogCategories /> */}
    </>
  )
}
