import React from 'react';

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;

  return (
    <div className="w-80">
      <img className="rounded-xl" src={thumbnails.medium.url} alt={title} />

      <div className="flex flex-col w-full">
        <span className="text-lg font-semibold">{title}</span>
        <span>{channelTitle}</span>
        <span>{statistics.viewCount} views</span>
        <span>{statistics.likeCount} likes</span>
      </div>
    </div>
  );
};

export default VideoCard;
