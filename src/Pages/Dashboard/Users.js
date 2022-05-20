import axios from "axios";
import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const navigate = useNavigate();
  const {
    data: users,
    isLoading,
    error,
    refetch,
  } = useQuery("users", () =>
    axios.get("http://localhost:3001/user", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    const status = error.response.status;
    if (status === 401 || status === 403) {
      signOut(auth);
      localStorage.removeItem("accessToken");
      navigate("/");
    }
  }
  return (
    <>
      <div className="my-5 text-2xl font-semibold">All Users</div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Change Role</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users?.data?.map((user, i) => (
              <UserRow key={user._id} user={user} i={i} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
