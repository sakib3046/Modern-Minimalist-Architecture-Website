import React from 'react';

interface VideoPreviewProps {
  webm: string;
  hevc: string;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ webm, hevc }) => {
  return (
    <video
      muted
      playsInline
      autoPlay
      loop
      style={{
        width: '100%',
        height: '100%',
      }}>
      <source src={webm} type="video/webm" />
      <source src={hevc} type="video/quicktime" />
    </video>
  );
};
export default VideoPreview;
