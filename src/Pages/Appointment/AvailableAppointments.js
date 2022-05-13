import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentServiceCard from './AppointmentServiceCard';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ selectedDay }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    axios.get('services.json').then((res) => setServices(res.data));
  }, []);
  return (
    <section className='container my-20'>
      <h4 className='text-center text- text-secondary text-xl font-bold mb-16'>
        Available Appointments on {format(selectedDay, 'PP')}
      </h4>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
        {services.map((service) => (
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
        />
      )}
    </section>
  );
};

export default AvailableAppointments;
