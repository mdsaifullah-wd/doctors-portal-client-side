import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
  const infoCards = [
    {
      title: 'Opening Hours',
      description: 'We are ready for you within...',
      icon: clock,
      bgClass: 'bg-gradient-to-r from-secondary to-primary',
    },
    {
      title: 'Visit Our Location',
      description: 'Brooklyn, NY 10036, United States',
      icon: marker,
      bgClass: 'bg-accent',
    },
    {
      title: 'Contact Us Now',
      description: '+880 1712-345678',
      icon: phone,
      bgClass: 'bg-gradient-to-r from-secondary to-primary',
    },
  ];
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 my-20'>
      {infoCards.map((info, index) => (
        <InfoCard key={index} info={info} />
      ))}
    </section>
  );
};

export default Info;
