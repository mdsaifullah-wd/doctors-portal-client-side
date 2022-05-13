import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
  const [selectedDay, setSelectedDay] = useState(new Date());
  return (
    <>
      <AppointmentBanner
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      <AvailableAppointments selectedDay={selectedDay} />
      <Footer />
    </>
  );
};

export default Appointment;
