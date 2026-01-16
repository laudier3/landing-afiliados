'use client'

import React from 'react'

interface VideoPlayerProps {
  url: string
}

export default function VideoPlayer({ url }: VideoPlayerProps) {
  if (!url) return null

  const isYouTube =
    url.includes('youtube.com') || url.includes('youtu.be')

  if (isYouTube) {
    const videoId = url.includes('youtu.be')
      ? url.split('youtu.be/')[1]?.split('?')[0]
      : new URL(url).searchParams.get('v')

    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  // MP4 / servidor próprio
  return (
    <video
      controls
      preload="metadata"
      className="w-full rounded-xl shadow-lg bg-black"
    >
      <source src={url} type="video/mp4" />
      Seu navegador não suporta vídeo HTML5.
    </video>
  )
}
