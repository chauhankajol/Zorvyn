import React, { useContext } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AuthContext } from "../../context/Authprovider";


const COLORS = ["#6366f1", "#f59e0b", "#10b981", "#ef4444", "#3b82f6"];

const SpendingChart = () => {
  const { userdata } = useContext(AuthContext);

  if (!userdata || userdata.length === 0) {
    return <div className="text-white">Loading...</div>;
  }

  const expenses = userdata[0]?.monthlyData[0]?.expenses;

  const chartdata = Object.entries(expenses || {}).map(([key, value]) => ({
    name: key,
    value: value,
  }));

  return (
    <div className="w-full max-w-md mx-auto px-4 mt-6">
      
   
      <div className="bg-gray-800 rounded-2xl shadow-xl p-4">
        <h2 className="text-lg sm:text-xl text-white font-semibold text-center mb-4">
          Expense Breakdown
        </h2>

      
        <div className="w-full h-[250px] sm:h-[300px]">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={chartdata}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                label={({ percent }) =>
                  `${(percent * 100).toFixed(0)}%`
                }
              >
                {chartdata.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]} 
                  />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SpendingChart;