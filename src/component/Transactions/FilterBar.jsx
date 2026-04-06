import React, { useContext } from 'react'
import { AuthContext } from '../../context/Authprovider'

const FilterBar = () => {
  const { setFilter } = useContext(AuthContext);

  return (
    <div>
      <button 
        onClick={() => setFilter("all")}
        className='text-white border border-white m-1 rounded-xl px-2 py-1 ml-2'>
        All
      </button>

      <button 
        onClick={() => setFilter("income")}
        className='text-white border border-white m-1 rounded-xl p-1'>
        Income
      </button>

      <button 
        onClick={() => setFilter("expense")}
        className='text-white border border-white m-1 rounded-xl p-1'>
        Expense
      </button>
    </div>
  )
}

export default FilterBar;