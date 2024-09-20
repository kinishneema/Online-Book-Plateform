import React from "react";
import { useContext } from "react";
import { authocontext } from "../contexts/Authprovider";
import { replace, useLocation, useNavigate } from "react-router-dom";

const Logout = () => {
  const { logOut } = useContext(authocontext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const handlelogout = () => {
    logOut()
      .then(() => {
        alert("sign out sucessfully!!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {});
  };
  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
      <button
        className="bg-red-700 px-8 py-2 text-white rounded"
        onClick={handlelogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
