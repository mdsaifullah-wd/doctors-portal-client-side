import { useEffect, useState } from 'react';

const useAdmin = (user) => {
  const { email } = user;
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:3001/user/admin/${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data);
          setAdminLoading(false);
        });
    }
  }, [email]);
  return [admin, adminLoading];
};
export default useAdmin;
