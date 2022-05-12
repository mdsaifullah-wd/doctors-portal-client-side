import React from 'react';

const InfoCard = ({ info }) => {
  const { title, description, icon, bgClass } = info;
  return (
    <div
      className={`card lg:card-side ${bgClass} shadow-xl text-white px-6 py-6 lg:py-0`}>
      <figure>
        <img src={icon} alt='Album' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
