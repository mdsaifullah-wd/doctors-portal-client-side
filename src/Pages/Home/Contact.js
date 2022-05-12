import React from 'react';
import bg from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/Buttons/PrimaryButton';

const Contact = () => {
  return (
    <section
      className='py-20 px-5'
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
      <div className='text-center'>
        <h3 className='text-secondary uppercase text-xl font-bold'>
          Contact Us
        </h3>
        <h2 className='text-white text-4xl'>Stay Connected with Us</h2>
      </div>
      <form className='my-10 max-w-md mx-auto'>
        <input
          type='email'
          name='email'
          placeholder='Email Address'
          className='block w-full h-12 focus:outline-0 text-xl p-5 rounded-lg mb-5'
        />
        <input
          type='text'
          name='subject'
          placeholder='Subject'
          className='block w-full h-12 focus:outline-0 text-xl p-5 rounded-lg mb-5'
        />
        <textarea
          name='message'
          placeholder='Your Message'
          className='block w-full h-36 focus:outline-0 text-xl p-5 rounded-lg mb-5'
        />
        <div className='flex justify-center'>
          <PrimaryButton type='submit'>
            <span className='px-4'>Submit</span>
          </PrimaryButton>
        </div>
      </form>
    </section>
  );
};

export default Contact;
