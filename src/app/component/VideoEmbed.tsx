'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PlayCircle, Volume2, VolumeX } from 'lucide-react';

interface VideoEmbedProps {
  videoUrl?: string;
  thumbnail: string;
  autoPlay?: boolean;
  mute?: boolean;
  loop?: boolean;
}

const VideoEmbed = ({ videoUrl = '', thumbnail, autoPlay = false, mute = true, loop = false }: VideoEmbedProps) => {
  const [showVideo, setShowVideo] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(mute);

  const isYouTube = videoUrl?.includes('youtube.com') || videoUrl?.includes('youtu.be');
  const isVimeo = videoUrl?.includes('vimeo.com');

  const getYouTubeId = (url: string) => {
    const regExp = /(?:youtube\.com.*v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const getVimeoId = (url: string) => {
    const regExp = /vimeo\.com\/(\d+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
      {!showVideo && (
        <>
          <Image src={thumbnail} alt="Video thumbnail" fill className="object-cover" />
          <button
            onClick={() => setShowVideo(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/30 transition"
          >
            <PlayCircle className="text-white w-16 h-16" />
          </button>
        </>
      )}

      {showVideo && videoUrl && (
        <>
         

          {!isYouTube && !isVimeo && (
            <video
              className="w-full h-full object-cover"
              src={videoUrl}
              autoPlay={autoPlay}
              muted={isMuted}
              loop={loop}
              controls
            />
          )}

          {/* Mute/Unmute Button */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
          >
            {isMuted ? <VolumeX /> : <Volume2 />}
          </button>
        </>
      )}
    </div>
  ); 
};

export default VideoEmbed;
