import React from 'react';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('v'));

  return (
    <div>
      <iframe
        width="1000"
        height="400"
        src={
          'https://www.youtube.com/embed/' +
          searchParams.get('v') +
          '?autoplay=1'
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
