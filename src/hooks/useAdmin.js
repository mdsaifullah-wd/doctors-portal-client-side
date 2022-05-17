import { useEffect, useState } from 'react';

const useAdmin = (user) => {
  const { email } = user;
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:3001/user/admin/${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setAdmin(data));
    }
  }, [email]);
  return [admin];
};
export default useAdmin;
