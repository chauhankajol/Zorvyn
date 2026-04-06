import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/Authprovider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { role, setRole } = useContext(AuthContext);

  const handleselect = (value) => {
    setRole(value);
    setOpen(false);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-10 py-3 bg-gray-400 w-full border border-white rounded-b-xl relative">
      

      <h4 className="text-lg sm:text-2xl text-amber-50 italic text-center sm:text-left">
        Finance Dashboard
      </h4>

  
      <div className="mt-3 sm:mt-0 text-center sm:text-right">
        <button
          className="border border-white rounded-xl px-3 py-2 text-black bg-white text-sm sm:text-base"
          onClick={() => setOpen(!open)}
        >
          Role: {role}
        </button>

  
        {open && (
          <div className="absolute right-4 sm:right-10 mt-2 w-32 bg-gray-500 rounded-lg shadow-lg flex flex-col gap-2 p-3 z-50">
            
            {role === "admin" && (
              <button
                className="text-white border border-white px-2 py-1 rounded hover:bg-gray-600"
                onClick={() => handleselect("user")}
              >
                User
              </button>
            )}

            {role === "user" && (
              <button
                className="text-white border border-white px-2 py-1 rounded hover:bg-gray-600"
                onClick={() => handleselect("admin")}
              >
                Admin
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;