import React, { useContext } from "react";
import { AuthContext } from "../../context/Authprovider";

const Summarycard = () => {
  const { userdata } = useContext(AuthContext);

  if (!userdata || userdata.length === 0) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="px-4 sm:px-10 mt-6">
      

      <div className="flex flex-col sm:flex-row gap-4 bg-gray-400 w-full border border-white rounded-xl p-4">

   
        <div className="flex-1 bg-gradient-to-b from-[#1e40af] to-[#9333ea] rounded-xl shadow-xl p-4">
          <h4 className="text-lg sm:text-2xl text-amber-100 italic">
            Total Balance
          </h4>
          <h4 className="text-xl sm:text-2xl text-amber-100 mt-2">
            ₹ {userdata?.[0].totalBalance}
            <span className="inline-block animate-bounce ml-2">💰</span>
          </h4>
        </div>

   
        <div className="flex-1 bg-gradient-to-b from-[#1e40af] to-[#9333ea] rounded-xl shadow-xl p-4">
          <h4 className="text-lg sm:text-2xl text-amber-100 italic">
            Income
          </h4>
          <h4 className="text-xl sm:text-2xl text-amber-100 mt-2">
            ₹ {userdata[0]?.monthlyData[0]?.income}
            <span className="inline-block animate-bounce ml-2 text-green-400">
              ↑
            </span>
          </h4>
        </div>


        <div className="flex-1 bg-gradient-to-b from-[#1e40af] to-[#9333ea] rounded-xl shadow-xl p-4">
          <h4 className="text-lg sm:text-2xl text-amber-100 italic">
            Expense
          </h4>
          <h4 className="text-xl sm:text-2xl text-amber-100 mt-2">
            ₹ {userdata?.[0].totalexpense}
            <span className="inline-block animate-bounce ml-2 text-red-500">
              ↓
            </span>
          </h4>
        </div>

      </div>
    </div>
  );
};

export default Summarycard;