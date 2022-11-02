// React Imports
import React from 'react';
// Sanity Imports
import { urlFor } from '../client';

const Pin = ({ pin: { postedBy, image, _id, destination } }) => {
  return (
    <div>
      <img
        src={urlFor(image).width(250).url()}
        alt='pins'
        className='rounded-lg w-full'
      />
    </div>
  );
};

export default Pin;