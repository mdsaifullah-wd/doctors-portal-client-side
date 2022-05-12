import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/Buttons/PrimaryButton';

const About = () => {
  return (
    <section className='hero container sm:px-8 md:px-28 mx-auto my-20'>
      <div className='hero-content flex-col lg:flex-row gap-16'>
        <img
          src={treatment}
          className='max-w-sm rounded-lg shadow-2xl flex-1'
          alt=''
        />
        <div className='flex-1'>
          <h1 className='text-5xl text-accent font-bold'>
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className='py-6'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default About;
