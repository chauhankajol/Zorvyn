import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/Authprovider";

const TransactionTable = () => {
  const { userdata, setUserdata, filter, search, role } =
    useContext(AuthContext);

  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    month: "",
    income: "",
    expense: "",
  });

  if (!userdata || userdata.length === 0) {
    return <div className="text-white text-center">Loading...</div>;
  }

  const transactions = userdata[0].monthlyData;

  const formattedData = transactions
    .map((item, index) => {
      const totalexpense = Object.values(item.expenses).reduce(
        (a, b) => a + b,
        0
      );

      return [
        {
          id: index + "-income",
          originalIndex: index,
          month: item.month,
          type: "Income",
          amount: item.income,
        },
        {
          id: index + "-expense",
          originalIndex: index,
          month: item.month,
          type: "Expense",
          amount: totalexpense,
        },
      ];
    })
    .flat();

  const filteredData = formattedData.filter((item) => {
    if (filter === "income") return item.type === "Income";
    if (filter === "expense") return item.type === "Expense";
    return true;
  });

  const finalData = filteredData.filter(
    (item) =>
      item.month.toLowerCase().includes(search.toLowerCase()) ||
      item.type.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (originalIndex) => {
    const updated = transactions.filter((_, i) => i !== originalIndex);

    setUserdata((prev) => {
      const newData = [...prev];
      newData[0].monthlyData = updated;
      return newData;
    });
  };

  const handleEdit = (originalIndex) => {
    if (role !== "admin") return;

    const item = transactions[originalIndex];

    const totalexpense = Object.values(item.expenses).reduce(
      (a, b) => a + b,
      0
    );

    setFormData({
      month: item.month,
      income: item.income,
      expense: totalexpense,
    });

    setEditIndex(originalIndex);
  };

  const handleUpdate = () => {
    if (role !== "admin") return;

    const updated = [...transactions];

    updated[editIndex] = {
      ...updated[editIndex],
      month: formData.month,
      income: Number(formData.income),
      expenses: {
        ...updated[editIndex].expenses,
        other: Number(formData.expense),
      },
    };

    setUserdata((prev) => {
      const newData = [...prev];
      newData[0].monthlyData = updated;
      return newData;
    });

    setEditIndex(null);
    setFormData({ month: "", income: "", expense: "" });
  };

  return (
    <div className="p-4 text-white w-full max-w-5xl mx-auto">

  
      {role === "admin" && editIndex !== null && (
        <div className="mb-4 p-3 bg-gray-200 rounded flex flex-col md:flex-row gap-2">
          <input
            type="text"
            placeholder="Month"
            value={formData.month}
            onChange={(e) =>
              setFormData({ ...formData, month: e.target.value })
            }
            className="p-2 text-black rounded"
          />

          <input
            type="number"
            placeholder="Income"
            value={formData.income}
            onChange={(e) =>
              setFormData({ ...formData, income: e.target.value })
            }
            className="p-2 text-black rounded"
          />

          <input
            type="number"
            placeholder="Expense"
            value={formData.expense}
            onChange={(e) =>
              setFormData({ ...formData, expense: e.target.value })
            }
            className="p-2 text-black rounded"
          />

          <button
            onClick={handleUpdate}
            className="bg-green-500 px-3 py-1 rounded"
          >
            Update
          </button>

          <button
            onClick={() => setEditIndex(null)}
            className="bg-gray-500 px-3 py-1 rounded"
          >
            Cancel
          </button>
        </div>
      )}

    
      <div className="flex flex-col gap-3">
        {finalData.map((item) => (
          <div
            key={item.id}
            className="
              bg-gray-800 
              rounded-lg 
              p-3 
              flex 
              flex-col 
              md:flex-row 
              md:items-center 
              md:justify-between 
              gap-2
            "
          >
          
            <div className="flex justify-between md:gap-6">
              <span className="font-semibold">{item.month}</span>
              <span className="text-gray-300">{item.type}</span>
              <span className="text-green-400">₹ {item.amount}</span>
            </div>

         
            {role === "admin" && (
              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => handleEdit(item.originalIndex)}
                  className="bg-blue-500 px-2 py-1 rounded text-sm"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(item.originalIndex)}
                  className="bg-red-500 px-2 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  ); 
};

export default TransactionTable;