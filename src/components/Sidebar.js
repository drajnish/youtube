import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  MdHomeFilled,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSubscriptions,
  MdOutlineShoppingBag,
  MdOutlineSettings,
  MdOutlineFlag,
  MdHelpOutline,
  MdOutlineFeedback,
} from 'react-icons/md';
import {
  BsPlayFill,
  BsFire,
  BsBroadcast,
  BsNewspaper,
  BsTrophy,
  BsLightbulb,
} from 'react-icons/bs';
import { IoMusicalNoteOutline } from 'react-icons/io5';
import { GiClapperboard, GiHanger } from 'react-icons/gi';
import { SiYoutubegaming } from 'react-icons/si';
import SidebarClose from './SidebarClose';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);

  return !isMenuOpen ? (
    <SidebarClose />
  ) : (
    <div className="basis-[18%] text-sm">
      <ul className="pl-2 pb-4 border-b border-b-black/10">
        <Link to="/">
          <li className="flex items-center px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
            <MdHomeFilled className="mr-2 w-6 h-6" />
            <span>Home</span>
          </li>
        </Link>
        <li className="flex items-center px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
          <BsPlayFill className="mr-2 w-6 h-6" />
          <span>Shorts</span>
        </li>
        <li className="flex items-center px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
          <MdOutlineSubscriptions className="mr-2 w-6 h-6" />
          <span>Subscriptions</span>
        </li>
      </ul>
      <ul className="pl-2 pb-4 border-b">
        <li className="flex items-center px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
          <MdOutlineVideoLibrary className="mr-2 w-6 h-6" />
          <span>Library</span>
        </li>
        <li className="flex items-center px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
          <MdHistory className="mr-2 w-6 h-6" /> <span>History</span>
        </li>
      </ul>
      <ul className="pl-2 pb-4 border-b">
        <h3 className="pl-2 py-2 text-lg font-medium">Explore</h3>
        <li className="flex items-center px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
          <BsFire className="mr-2 w-6 h-6" />
          <span>Trending</span>
        </li>
        <li className="flex items-center px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
          <MdOutlineShoppingBag className="mr-2 w-6 h-6" />
          <span>Shopping</span>
        </li>
        <li className="flex items-center px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
          <IoMusicalNoteOutline className="mr-2 w-6 h-6" />
          <span>Music</span>
        </li>
        <li className="flex items-center px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
          <GiClapperboard className="mr-2 w-6 h-6" />
          <span>Films</span>
        </li>
        <li className="flex items-center px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
          <BsBroadcast className="mr-2 w-6 h-6" />
          <span>Live</span>
        </li>
        <li className="flex items-center px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
          <SiYoutubegaming className="mr-2 w-6 h-6" />
          <span>Gaming</span>
        </li>
        <li className="flex items-center px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
          <BsNewspaper className="mr-2 w-6 h-6" />
          <span>News</span>
        </li>
        <li className="flex items-center px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
          <BsTrophy className="mr-2 w-6 h-6" />
          <span>Sport</span>
        </li>
        <li className="flex items-center px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
          <BsLightbulb className="mr-2 w-6 h-6" />
          <span>Learning</span>
        </li>
        <li className="flex items-center px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
          <GiHanger className="mr-2 w-6 h-6" />
          <span>Fashion & beauty</span>
        </li>
      </ul>
      <ul className="pl-2 pb-4 border-b">
        <li className="flex items-center px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
          <MdOutlineSettings className="mr-2 w-6 h-6" />
          <span>Settings</span>
        </li>
        <li className="flex items-center px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
          <MdOutlineFlag className="mr-2 w-6 h-6" /> <span>Report History</span>
        </li>
        <li className="flex items-center px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
          <MdHelpOutline className="mr-2 w-6 h-6" />
          <span>Help</span>
        </li>
        <li className="flex items-center px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
          <MdOutlineFeedback className="mr-2 w-6 h-6" />{' '}
          <span>Send feedback</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
