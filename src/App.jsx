import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./component/layout/Navbar";
import Dashboard from "./component/pages/Dashboard";

import Insight from "./component/pages/Insight";
import { AuthContext } from "./context/Authprovider";
import Transaction from "./component/pages/Transaction";


const App = () => {
const{role}=useContext(AuthContext)
console.log("ROLE IN APP:", role);

  useEffect(() => {});
  return (
    <div className="">
      <div className="bg-gradient-to-b from-[#003153] to-[#003d4d] min-h-screen min-w-screen pt-3 ">
          <Navbar />
        {role ==="user" && (
          <div>
          
            <Dashboard />
            <Transaction/>
            <Insight />
          </div>
        )}
        {role === "admin" && <Transaction />}
      </div>
    </div>
  );
};

export default App;
