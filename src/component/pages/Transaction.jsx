import React from "react";
import TransactionTable from "../Transactions/TransactionTable";
import SearchBar from "../Transactions/SearchBar";
import FilterBar from "../Transactions/FilterBar";

const Transaction = () => {
  return (
    <div>
     <div className="flex justify-end mr-20 mt-3">
 
</div>
      <div className="flex p-2 ">
        <SearchBar />
        <FilterBar/>
      </div>
      <div className="bg-gray-400 m-auto w-[95vw] rounded-b-xl">
        <TransactionTable />
      </div>
    </div>
  );
};

export default Transaction;
