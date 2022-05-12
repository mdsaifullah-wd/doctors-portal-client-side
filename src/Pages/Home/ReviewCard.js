import React from 'react';

const ReviewCard = ({ r }) => {
  const { name, location, img, review } = r;
  return (
    <div class='card bg-base-100 shadow-xl'>
      <div class='card-body items-center'>
        <p>{review}</p>
      </div>
      <div className='flex gap-6 items-center ml-10 mb-8'>
        <div class='avatar'>
          <div class='w-20 rounded-full ring ring-primary'>
            <img src={img} alt='' />
          </div>
        </div>
        <div>
          <p className='text-xl font-semibold'>{name}</p>
          <p className='text-base'>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
