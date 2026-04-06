import React, { useContext } from "react";
import { AuthContext } from "../../context/Authprovider";

const Insightcard = () => {
  const { userdata } = useContext(AuthContext);

  if (!userdata || userdata.length === 0) {
    return <div className="text-white text-center">Loading...</div>;
  }

  const transactions = userdata[0].monthlyData;


  let categoryTotals = {};
  transactions.forEach((item) => {
    Object.entries(item.expenses).forEach(([key, value]) => {
      categoryTotals[key] = (categoryTotals[key] || 0) + value;
    });
  });

  const topCategory =
    Object.keys(categoryTotals).length > 0
      ? Object.keys(categoryTotals).reduce((a, b) =>
          categoryTotals[a] > categoryTotals[b] ? a : b
        )
      : "N/A";


  let percentChange = 0;
  let trend = "No Data";

  if (transactions.length >= 2) {
    const last = transactions[transactions.length - 1];
    const prev = transactions[transactions.length - 2];

    const lastExpense = Object.values(last.expenses).reduce((a, b) => a + b, 0);
    const prevExpense = Object.values(prev.expenses).reduce((a, b) => a + b, 0);

    if (prevExpense !== 0) {
      percentChange = (
        ((lastExpense - prevExpense) / prevExpense) * 100
      ).toFixed(1);

      trend = lastExpense > prevExpense ? "up" : "down";
    }
  }


  let tip = "Keep tracking your expenses 💡";

  if (categoryTotals[topCategory] > 5000) {
    tip = `You are spending a lot on ${topCategory}`;
  }

  if (trend === "up") {
    tip = "Your spending increased, review your expenses";
  }

  if (trend === "down") {
    tip = "Great! You reduced spending 🎉";
  }

  return (
    <div className="
      w-full 
      px-4 
      mt-6 
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      gap-4
      text-white
    ">
      
   
      <div className="bg-gradient-to-b from-[#1e40af] to-[#9333ea] h-20 shadow-xl rounded-xl flex items-center p-3">
        <h4 className="text-sm font-semibold italic">
          Top Category:{" "}
          <span className="text-yellow-300 capitalize">
            {topCategory}
          </span>{" "}
          🍔
        </h4>
      </div>

   
      <div className="bg-gradient-to-b from-[#1e40af] to-[#9333ea] h-20 shadow-xl rounded-xl flex items-center p-3">
        <h4 className="text-sm font-semibold italic">
          This Month:{" "}
          <span
            className={`${
              trend === "up" ? "text-red-500" : "text-green-400"
            }`}
          >
            {percentChange}% {trend === "up" ? "↑" : "↓"}
          </span>
        </h4>
      </div>

  
      <div className="bg-gradient-to-b from-[#1e40af] to-[#9333ea] h-20 shadow-xl rounded-xl flex items-center p-3">
        <h4 className="text-sm font-semibold italic">
          Tip:{" "}
          <span className="text-gray-200 text-sm">
            {tip}
          </span>{" "}
          💡
        </h4>
      </div>
    </div>
  );
};

export default Insightcard;