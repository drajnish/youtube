import React from 'react';
import { BsPlayFill } from 'react-icons/bs';
import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

const SidebarClose = () => {
  return (
    <div className="basis-[5%] mr-5 text-sm">
      <ul className="pl-2 pb-4">
        <Link to="/">
          <li className="flex flex-col items-center justify-center py-2 rounded-lg cursor-pointer hover:bg-gray-200">
            <MdHomeFilled className="w-5 h-5" />
            <span className="text-xs mt-1">Home</span>
          </li>
        </Link>
        <li className="flex flex-col items-center justify-center py-2 rounded-lg cursor-pointer hover:bg-gray-200">
          <BsPlayFill className="w-5 h-5" />
          <span className="text-xs mt-1">Shorts</span>
        </li>
        <li className="flex flex-col items-center justify-center py-2 rounded-lg cursor-pointer hover:bg-gray-200">
          <MdOutlineSubscriptions className="w-5 h-5" />
          <span className="text-xs mt-1">Subscription</span>
        </li>
        <li className="flex flex-col items-center justify-center py-2 rounded-lg cursor-pointer hover:bg-gray-200">
          <MdOutlineVideoLibrary className="w-5 h-5" />
          <span className="text-xs mt-1">Library</span>
        </li>
      </ul>
    </div>
  );
};

export default SidebarClose;
