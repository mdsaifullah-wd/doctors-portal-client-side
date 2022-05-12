import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Fluoride Treatment',
      description:
        'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      icon: fluoride,
    },
    {
      title: 'Cavity Filling',
      description:
        'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      icon: cavity,
    },
    {
      title: 'Teeth Whitening',
      description:
        'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      icon: whitening,
    },
  ];
  return (
    <section className='my-20'>
      <div className='text-center'>
        <h3 className='text-secondary uppercase text-xl font-bold'>
          Our Services
        </h3>
        <h2 className='text-accent text-4xl'>Services We Provide</h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 my-16'>
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
