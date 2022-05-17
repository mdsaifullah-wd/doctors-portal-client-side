import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AppointmentServiceCard from './AppointmentServiceCard';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ selectedDay }) => {
  const date = format(selectedDay, 'PP');
  const [treatment, setTreatment] = useState(null);
  const local = `http://localhost:3001/available/?date=${date}`;
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(['available', local], () =>
    fetch(local).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className='container my-20'>
      <h4 className='text-center text- text-secondary text-xl font-bold mb-16'>
        Available Appointments on {date}
      </h4>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
        {services?.map((service) => (
          <AppointmentServiceCard
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          setTreatment={setTreatment}
          selectedDay={selectedDay}
          refetch={refetch}
        />
      )}
    </section>
  );
};

export default AvailableAppointments;
