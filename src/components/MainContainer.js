import React from 'react';
import ButtonList from './ButtonList';
// import Catalyst from './Catalyst';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  return (
    <div className="w-[88%] px-2">
      <ButtonList />
      <VideoContainer />
      {/* <Catalyst /> */}
    </div>
  );
};

export default MainContainer;
