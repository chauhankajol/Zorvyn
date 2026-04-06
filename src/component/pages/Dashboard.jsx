import React from 'react'
import Summarycard from '../dashboard/Summarycard'
import Balancechart from '../dashboard/Balancechart'
import SpendingChart from '../dashboard/SpendingChart'

const Dashboard = () => {
  return (
    <div>
      <Summarycard />

      <div className="flex p-6 flex-wrap">
        <Balancechart />
        <SpendingChart />
      </div>
    </div>
  )
}

export default Dashboard