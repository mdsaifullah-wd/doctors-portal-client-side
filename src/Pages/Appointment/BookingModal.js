import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, selectedDay }) => {
  const { name, slots } = treatment;
  const handleBooking = (e) => {
    e.preventDefault();
    setTreatment(null);
  };
  return (
    <>
      <input type='checkbox' id='booking-modal' class='modal-toggle' />
      <div class='modal modal-bottom sm:modal-middle'>
        <div class='modal-box'>
          <label
            for='booking-modal'
            class='btn btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </label>
          <h3 class='font-bold text-lg'>{name}</h3>
          <form
            onSubmit={handleBooking}
            className='mt-4 grid grid-cols-1 gap-3'>
            <input
              type='text'
              name='date'
              value={format(selectedDay, 'PP')}
              class='input input-bordered w-full'
              disabled
            />
            <select name='slot' class='select select-bordered w-full'>
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type='text'
              name='name'
              placeholder='Name'
              class='input input-bordered w-full'
            />
            <input
              type='text'
              name='phone'
              placeholder='Phone Number'
              class='input input-bordered w-full'
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              class='input input-bordered w-full'
            />
            <input
              type='submit'
              value='submit'
              className='btn btn-accent block w-full'
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
