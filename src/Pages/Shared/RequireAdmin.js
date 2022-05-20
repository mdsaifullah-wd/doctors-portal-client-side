import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "./Loading";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

  if (loading || adminLoading) {
    return <Loading />;
  }

  if (!user || !admin) {
    return (
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold mt-20 text-error">
          Unauthorized Access
        </h2>
      </div>
    );
  }

  return children;
};

export default RequireAdmin;
