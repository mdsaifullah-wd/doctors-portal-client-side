import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';

const Banner = () => {
  return (
    <div
      className={`hero min-h-screen`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
      <div>
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
            <button className='btn btn-primary font-bold uppercase text-white bg-gradient-to-r from-secondary to-primary hover:from-accent hover:to-accent hover:border-accent'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
