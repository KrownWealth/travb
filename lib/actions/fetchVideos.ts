'use client'

import { useEffect, useState } from 'react'
import { VideoProps } from '@/types'

const useFetchVideos = () => {
  const [videos, setVideos] = useState<VideoProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch('/api/cloud-videos')
        if (response.ok) {
          const data: VideoProps[] = await response.json()
          setVideos(data)
          //console.log('Fetched videos:', data)
        } else {
          console.error('Failed to fetch videos:', response.statusText)
        }
      } catch (error) {
        console.error('Error fetching videos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  return { videos, loading }
}

export default useFetchVideos
