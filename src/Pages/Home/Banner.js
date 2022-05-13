import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import PrimaryButton from '../Shared/Buttons/PrimaryButton';

const Banner = () => {
  return (
    <div
      className={`hero lg:min-h-[calc(100vh-80px)]`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
      <div className='px-12'>
        <div className='hero-content flex-col lg:flex-row-reverse gap-10'>
          <img
            src={chair}
            className='w-full lg:w-1/2 rounded-lg shadow-2xl'
            alt=''
          />
          <div>
            <h1 className='text-5xl font-bold text-accent'>
              Your New Smile Starts Here
            </h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
