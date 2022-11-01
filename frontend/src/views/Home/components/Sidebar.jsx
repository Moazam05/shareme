// React Imports
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// React Icons
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';
// Custom Imports
import logo from '../../../assets/logo.png';

const isNotActiveStyle =
  'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';
const isActiveStyle =
  'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize';

const categories = [
  { name: 'Animals' },
  { name: 'Wallpapers' },
  { name: 'Photography' },
  { name: 'Gaming' },
  { name: 'Coding' },
];

const Sidebar = ({ user, closeToggle }) => {
  //   console.log('user', user);
  const handleCloseSidebar = function () {
    if (closeToggle) closeToggle(false);
  };

  return (
    <div className='flex flex-col justify-between bg-white h-full min-w-210'>
      <div className='flex flex-col'>
        <Link
          to='/'
          onClick={handleCloseSidebar}
          className='flex px-5 gap-2 my-6 ppt-1 w-190 items-center'
        >
          <img src={logo} alt='logo' className='w-full' />
        </Link>
        <div className='flex flex-col gap-5'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <RiHomeFill />
            Home
          </NavLink>
          <h3 className='mt-2 px-5 text-base 2xl:text-xl'>
            Discover categories
          </h3>

          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              key={category.name}
              onClick={handleCloseSidebar}
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
      {user && (
        <Link
          to={`user-profile/${user._id}`}
          className='flex my-5 mb-3 gap-2 items-center bg-white rounded-lg shadow-lg'
          onClick={handleCloseSidebar}
        >
          <img
            src={user.image}
            alt='user-profile'
            className='w-10 h-10 rounded-full m-2'
          />
          <p>{user.userName}</p>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
