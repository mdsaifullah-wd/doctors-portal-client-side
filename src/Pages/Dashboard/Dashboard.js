import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className='drawer drawer-mobile'>
      <input id='dashboard-sidebar' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        <h2 className='text-4xl text-center font-bold mt-10'>
          Welcome to Dashboard
        </h2>
        <Outlet />
      </div>
      <div className='drawer-side'>
        <label htmlFor='dashboard-sidebar' className='drawer-overlay'></label>
        <ul className='menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content'>
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to='/dashboard'>My Appointments</Link>
          </li>
          <li>
            <Link to='/dashboard/reviews'>My Reviews</Link>
            <Link to='/dashboard/history'>My History</Link>
            {admin && <Link to='/dashboard/users'>All Users</Link>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
