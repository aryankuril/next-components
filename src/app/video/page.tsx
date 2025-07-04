import React from 'react'
import VideoEmbed from '../component/VideoEmbed'


const index = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <VideoEmbed
        videoUrl="/video/desktop-video.mp4" // Custom video or HLS stream
        thumbnail="/images/desktop-banner.png"
      />
    </div>
  )
}

export default index