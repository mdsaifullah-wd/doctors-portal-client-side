import axios from 'axios';
import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, setTreatment, selectedDay, refetch }) => {
  const [user, loading, error] = useAuthState(auth);
  const { _id, name, slots } = treatment;
  const handleBooking = async (e) => {
    e.preventDefault();

    const booking = {
      treatmentId: _id,
      patientName: user.displayName,
      patientEmail: user.email,
      patientPhone: e.target.phone.value,
      treatment: name,
      date: format(selectedDay, 'PP'),
      slot: e.target.slot.value,
    };

    await axios.post('http://localhost:3001/booking', booking).then((res) => {
      console.log(res);
      if (res.status === 200) {
        res.data.status
          ? toast(`Appointment is set on ${booking.date} at ${booking.slot}`)
          : toast.error(
              `You already have an appointment on ${res.data.booking.date} at ${res.data.booking.slot}`
            );
        refetch();
        setTreatment(null);
      }
    });
  };
  return (
    <>
      <input type='checkbox' id='booking-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <label
            htmlFor='booking-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </label>
          <h3 className='font-bold text-lg'>{name}</h3>
          <form
            onSubmit={handleBooking}
            className='mt-4 grid grid-cols-1 gap-3'>
            <input
              type='text'
              name='date'
              value={format(selectedDay, 'PP')}
              className='input input-bordered w-full'
              disabled
            />
            <select name='slot' className='select select-bordered w-full'>
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type='text'
              name='name'
              value={user?.displayName}
              className='input input-bordered w-full'
              disabled
            />
            <input
              type='email'
              name='email'
              value={user?.email}
              className='input input-bordered w-full'
              disabled
            />
            <input
              type='text'
              name='phone'
              placeholder='Phone Number'
              className='input input-bordered w-full'
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
