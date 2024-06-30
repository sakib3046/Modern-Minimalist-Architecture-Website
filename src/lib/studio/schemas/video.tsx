import VideoPreview from '@studio/components/VideoPreview';
import React from 'react';
import { FcVideoCall } from 'react-icons/fc';
import { defineField, defineType } from 'sanity';

const video = defineType({
  name: 'video',
  title: 'Video',
  type: 'object',
  icon: FcVideoCall,
  fields: [
    defineField({
      name: 'video_webm',
      type: 'file',
      title: 'WebM',
      options: { accept: 'video/webm,video/x-matroska' },
    }),
    defineField({
      name: 'video_hevc',
      type: 'file',
      title: 'MOV - HEVC',
      options: { accept: 'video/quicktime,video/mp4' },
    }),
  ],
  preview: {
    select: {
      webm: 'video_webm.asset.url',
      hevc: 'video_hevc.asset.url',
    },
    prepare: ({ webm, hevc }) => ({
      title: 'Video',
      media: <VideoPreview webm={webm} hevc={hevc} />,
    }),
  },
});

export default video;
