import React from 'react';
import { useDispatch } from 'react-redux';
import Logo from '../assets/img/Logo.webp';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaUserCircle } from 'react-icons/fa';
import { TfiSearch } from 'react-icons/tfi';
import { toggleMenu } from '../utils/navSlice';

const Header = () => {
  const dispatch = useDispatch();

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <RxHamburgerMenu
          className="p-2 cursor-pointer hover:bg-gray-200 hover:rounded-full"
          size={42}
          onClick={() => handleMenuToggle()}
        />
        <div className="w-24 h-5 mx-4">
          <a href="/">
            <img src={Logo} alt="Youtube Logo" />
          </a>
        </div>
      </div>
      <div className="flex basis-3/4 justify-start px-10">
        <input
          type="text"
          className="w-1/2 px-4 py-1 border rounded-l-full"
          placeholder="Search"
        />
        <button className="px-5 py-2 border rounded-r-full bg-gray-100">
          <TfiSearch />
        </button>
      </div>
      <div className="mr-2">
        <FaUserCircle className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Header;
