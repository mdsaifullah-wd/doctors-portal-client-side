import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const { email } = user;
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:3001/user/admin`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 403) {
            setAdmin(false);
          }
          return res.json();
        })
        .then((data) => {
          console.log(data.admin);
          if (data.admin) {
            setAdmin(true);
          }
          setAdminLoading(false);
        });
    }
  }, [email]);
  return [admin, adminLoading];
};
export default useAdmin;
