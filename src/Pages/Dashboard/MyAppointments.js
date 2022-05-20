import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppointments = () => {
  const [user] = useAuthState(auth);
  const [appointments, setApppointments] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/booking?patient=${user.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((data) => setApppointments(data))
      .catch((error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        }
      });
  }, [user.email, navigate]);

  return (
    <>
      <div className="my-5 text-2xl font-semibold">My Appointments</div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
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
