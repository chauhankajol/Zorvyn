import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utility/Localstorage";


export const AuthContext = createContext();
const Authprovider = ({ children }) => {
  const [userdata, setUserdata] = useState(null);
  const [role, setRole] = useState("user");
 const [filter, setFilter] = useState("all");
 const [search, setSearch] = useState("");

 useEffect(() => {
  let data = getLocalStorage();

  if (!data) {
    setLocalStorage();
    data = getLocalStorage();
  }

  setUserdata(data);
}, []);
  return (
    <AuthContext.Provider value={{ userdata, setUserdata, role, setRole,filter,setFilter,search,setSearch}}>
     
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;
