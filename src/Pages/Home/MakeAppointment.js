import React from 'react';
import bg from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';
import PrimaryButton from '../Shared/Buttons/PrimaryButton';

const MakeAppointment = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className='flex justify-between items-center mt-48 mb-20 px-12'>
      <div className='flex-1 mt-[-130px] hidden md:block'>
        <img src={doctor} alt='' />
      </div>
      <div className='text-white flex-1 py-16'>
        <h3 className='text-secondary text-xl mb-6'>Appointment</h3>
        <h2 className='text-4xl mb-6'>Make an Appointment Today</h2>
        <p className='text-base mb-8'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
