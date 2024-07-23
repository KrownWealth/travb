import { NextResponse } from 'next/server'
import { cloudinary } from '@/lib/actions'
import { VideoProps, CloudinaryVideo } from '@/types'

export async function GET() {
  try {
    const resources = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'travb/',
      resource_type: 'video',
      max_results: 100
    })

    const videos: VideoProps[] = resources.resources.map(
      (resource: CloudinaryVideo) => ({
        id: resource.asset_id,
        url: resource.secure_url,
        width: resource.width,
        height: resource.height
      })
    )
    //console.log('videos on server', videos)
    return NextResponse.json(videos, { status: 200 })
  } catch (error: any) {
    console.error('Error fetching videos:', error)
    return NextResponse.json(
      { error: `Failed to fetch videos: ${error.message}` },
      { status: 500 }
    )
  }
}
