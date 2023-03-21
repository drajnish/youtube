import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { API_YOUTUBE_VIDEO } from '../utils/constants';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(API_YOUTUBE_VIDEO);
    const json = await data.json();
    setVideos(json.items);
    console.log(json.items);
  };

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {videos.map((video) => (
        <VideoCard info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
