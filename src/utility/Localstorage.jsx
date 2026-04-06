export const customers = [
  {
    id: "CUST001",
    name: "Amit Sharma",
    email: "amit.sharma@gmail.com",
    password: "amit123",
    totalBalance: 75000,
    totalexpense: 15000,
    monthlyData: [
      { month: "Jan", income: 30000, expenses: { food: 5000, grocery: 4000, travel: 3000, shopping: 2000 } },
      { month: "Feb", income: 32000, expenses: { food: 4500, grocery: 4200, travel: 2500, shopping: 3000 } },
      { month: "Mar", income: 31000, expenses: { food: 4800, grocery: 3900, travel: 2700, shopping: 2500 } },
      { month: "Apr", income: 33000, expenses: { food: 5000, grocery: 4100, travel: 3000, shopping: 2800 } },
      { month: "May", income: 35000, expenses: { food: 5200, grocery: 4300, travel: 3200, shopping: 3000 } },
      { month: "Jun", income: 36000, expenses: { food: 5400, grocery: 4500, travel: 3500, shopping: 3200 } }
    ]
  },

  {
    id: "CUST002",
    name: "Priya Verma",
    email: "priya.verma@gmail.com",
    password: "priya123",
    totalBalance: 82000,
        totalexpense: 15000,
    monthlyData: [
      { month: "Jan", income: 35000, expenses: { food: 6000, grocery: 3500, travel: 4000, shopping: 3000 } },
      { month: "Feb", income: 37000, expenses: { food: 5500, grocery: 3800, travel: 3500, shopping: 2500 } },
      { month: "Mar", income: 36000, expenses: { food: 5800, grocery: 3600, travel: 3700, shopping: 2800 } },
      { month: "Apr", income: 38000, expenses: { food: 6000, grocery: 4000, travel: 4200, shopping: 3000 } },
      { month: "May", income: 40000, expenses: { food: 6200, grocery: 4200, travel: 4500, shopping: 3200 } },
      { month: "Jun", income: 42000, expenses: { food: 6500, grocery: 4500, travel: 4800, shopping: 3500 } }
    ]
  },

  {
    id: "CUST003",
    name: "Rahul Singh",
    email: "rahul.singh@gmail.com",
    password: "rahul123",
    totalBalance: 64000,
        totalexpense: 15000,
    monthlyData: [
      { month: "Jan", income: 28000, expenses: { food: 4000, grocery: 3000, travel: 2000, shopping: 1500 } },
      { month: "Feb", income: 29000, expenses: { food: 4200, grocery: 3200, travel: 2200, shopping: 1800 } },
      { month: "Mar", income: 30000, expenses: { food: 4300, grocery: 3100, travel: 2300, shopping: 2000 } },
      { month: "Apr", income: 31000, expenses: { food: 4500, grocery: 3300, travel: 2500, shopping: 2200 } },
      { month: "May", income: 32000, expenses: { food: 4700, grocery: 3500, travel: 2700, shopping: 2400 } },
      { month: "Jun", income: 34000, expenses: { food: 5000, grocery: 3700, travel: 3000, shopping: 2600 } }
    ]
  },

  {
    id: "CUST004",
    name: "Sneha Gupta",
    email: "sneha.gupta@gmail.com",
    password: "sneha123",
    totalBalance: 91000,
        totalexpense: 15000,
    monthlyData: [
      { month: "Jan", income: 40000, expenses: { food: 7000, grocery: 5000, travel: 4500, shopping: 3500 } },
      { month: "Feb", income: 42000, expenses: { food: 6500, grocery: 4800, travel: 4000, shopping: 3000 } },
      { month: "Mar", income: 41000, expenses: { food: 6800, grocery: 4900, travel: 4200, shopping: 3200 } },
      { month: "Apr", income: 43000, expenses: { food: 7000, grocery: 5200, travel: 4500, shopping: 3500 } },
      { month: "May", income: 45000, expenses: { food: 7200, grocery: 5400, travel: 4800, shopping: 3800 } },
      { month: "Jun", income: 47000, expenses: { food: 7500, grocery: 5600, travel: 5000, shopping: 4000 } }
    ]
  },

  {
    id: "CUST005",
    name: "Karan Mehta",
    email: "karan.mehta@gmail.com",
    password: "karan123",
    totalBalance: 70000,
        totalexpense: 15000,
    monthlyData: [
      { month: "Jan", income: 31000, expenses: { food: 5200, grocery: 4100, travel: 2800, shopping: 2200 } },
      { month: "Feb", income: 33000, expenses: { food: 5000, grocery: 3900, travel: 2600, shopping: 2400 } },
      { month: "Mar", income: 32000, expenses: { food: 5100, grocery: 4000, travel: 2700, shopping: 2300 } },
      { month: "Apr", income: 34000, expenses: { food: 5300, grocery: 4200, travel: 2900, shopping: 2500 } },
      { month: "May", income: 36000, expenses: { food: 5500, grocery: 4400, travel: 3100, shopping: 2700 } },
      { month: "Jun", income: 38000, expenses: { food: 5800, grocery: 4600, travel: 3300, shopping: 2900 } }
    ]
  }
];
export const setLocalStorage=()=>{
    localStorage.setItem("customers",JSON.stringify(customers))
}

export const getLocalStorage=()=>{
    const data = localStorage.getItem("customers")
    console.log(JSON.parse(data))
   return JSON.parse(data); 

}
