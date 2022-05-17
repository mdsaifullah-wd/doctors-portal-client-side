import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, i, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:3001/admin/add/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          refetch();
          toast.success(`${email} is made an Admin!`);
        } else if (res.status === 403) {
          refetch();
          toast.error('You are not an admin');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  const removeAdmin = () => {
    fetch(`http://localhost:3001/admin/remove/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          refetch();
          toast.success(`${email} is removed from Admin!`);
        } else if (res.status === 403) {
          refetch();
          toast.error('You are not an admin');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{email}</td>
      <td>
        {role === 'admin' ? (
          <button onClick={removeAdmin} className='btn btn-error btn-xs'>
            Remove Admin
          </button>
        ) : (
          <button onClick={makeAdmin} className='btn btn-xs'>
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className='btn btn-xs'>Remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
