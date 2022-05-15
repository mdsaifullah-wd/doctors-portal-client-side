import React from 'react';

const AppointmentServiceCard = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class='card bg-base-100 shadow-xl'>
      <div class='card-body items-center text-center'>
        <h2 class='card-title text-secondary text-xl '>{name}</h2>
        <p className='uppercase text-sm'>
          {slots.length ? (
            slots[0]
          ) : (
            <span className='text-red-400'>Try Another Day</span>
          )}
        </p>
        <p className='uppercase text-xs mb-4'>
          {slots.length ? slots.length : 'No'}{' '}
          {slots.length ? 'Spaces' : 'Space'} Available
        </p>
        <div class='card-actions'>
          <label
            for='booking-modal'
            className={`btn btn-primary font-bold uppercase text-white bg-gradient-to-r from-secondary to-primary hover:from-accent hover:to-accent hover:border-accent`}
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}>
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentServiceCard;
