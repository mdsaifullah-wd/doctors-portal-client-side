import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyAppointments = () => {
  const [user] = useAuthState(auth);
  const { data: appointments, isloading } = useQuery('appointments', () =>
    axios.get(`http://localhost:3001/booking?patient=${user.email}`)
  );
  if (isloading) {
    return <Loading />;
  }
  return (
    <>
      <div className='my-5 text-2xl font-semibold'>My Appointments</div>
      <div class='overflow-x-auto'>
        <table class='table table-zebra w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {appointments?.data?.map((a, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyAppointments;
