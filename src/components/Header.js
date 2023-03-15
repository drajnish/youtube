import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaUserCircle } from 'react-icons/fa';
import { TfiSearch } from 'react-icons/tfi';
import Logo from '../assets/img/Logo.webp';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-2">
      <div className="flex items-center">
        <RxHamburgerMenu className="w-6 h-6" />
        <div className="w-24 h-5 mx-2">
          <img src={Logo} alt="Youtube Logo" />
        </div>
      </div>
      <div className="flex basis-3/4 justify-start px-10">
        <input
          type="text"
          className="w-1/2 px-4 py-1 border rounded-l-full"
          placeholder="Search"
        />
        <button className=" px-5 py-2 border rounded-r-full bg-gray-100">
          <TfiSearch />
        </button>
      </div>
      <div>
        <FaUserCircle className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Header;
