// React Imports
import React from 'react';
// React Loader Spinner
import { RotatingLines } from 'react-loader-spinner';

const Spinner = ({ message }) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <RotatingLines
        strokeColor='#00BFFF'
        height={50}
        width={50}
        className='m-5'
      />
      <p className='text-lg text-center px-2 pt-2'>{message}</p>
    </div>
  );
};

export default Spinner;
