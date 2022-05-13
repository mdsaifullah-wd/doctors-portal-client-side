import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import bg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';

const AppointmentBanner = ({ selectedDay, setSelectedDay }) => {
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
          <div className='w-full flex justify-center'>
            <DayPicker
              mode='single'
              selected={selectedDay}
              onSelect={setSelectedDay}
            />
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
