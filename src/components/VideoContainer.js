import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
  };

  return (
    <div className="flex flex-wrap justify-start gap-8 px-2 my-8">
      {videos.map((video) => (
        <Link to={'watch?v=' + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
