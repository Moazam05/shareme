// React Imports
import React from 'react';
import { useNavigate } from 'react-router-dom';
// React Google Imports
import GoogleLogin from 'react-google-login';
// React Icons
import { FcGoogle } from 'react-icons/fc';
// Images Imports
import logo from '../../assets/logowhite.png';
import shareVideo from '../../assets/share.mp4';

const Login = () => {
  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
          src={shareVideo}
          type='video/mp4'
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'
        />

        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
          <div className='p-5'>
            <img src={logo} alt='logo' width='130px' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
