import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, i, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    axios.put(`http://localhost:3001/admin/${email}`).then((res) => {
      if (res.status === 200) {
        refetch();
        toast.success(`${email} is made an Admin!`);
      }
    });
  };
  const removeAdmin = () => {
    axios.put(`http://localhost:3001/admin/remove/${email}`).then((res) => {
      if (res.status === 200) {
        refetch();
        toast.success(`${email} is removed from Admin!`);
      }
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
