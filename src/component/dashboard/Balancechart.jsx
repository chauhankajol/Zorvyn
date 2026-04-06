import React, { useContext } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AuthContext } from '../../context/Authprovider';

const Balancechart = () => {

  const { userdata } = useContext(AuthContext);

  if (!userdata || userdata.length === 0) {
    return <div className="text-white text-center">Loading...</div>;
  }

  const chartdata = userdata[0]?.monthlyData?.map((item) => {
    const totalexpenses = Object.values(item.expenses).reduce((a, b) => a + b, 0);
    return {
      month: item.month,
      balance: item.income - totalexpenses
    };
  });

  return (
    <div className="
      w-full 
      sm:w-full 
      md:w-[48%] 
      lg:w-[45%]
      h-[250px] 
      md:h-[300px]
      bg-gray-800 
      rounded-2xl 
      shadow-xl 
      p-4
    ">
      
      <h3 className="text-lg md:text-xl text-white font-semibold mb-2 text-center md:text-left">
        Balance Chart
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartdata}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area 
            type="monotone" 
            dataKey="balance" 
            stroke="#6366f1" 
            fill="#6366f1" 
            fillOpacity={0.3} 
          />
        </AreaChart>
      </ResponsiveContainer>

    </div>
  );
};

export default Balancechart;