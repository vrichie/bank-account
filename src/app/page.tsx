import React from 'react'
import Link from 'next/link'


const Dashboardpage = () => {
  const transactions = [
    {description: "Transaction 1", amount:"$100"},
    {description: "Transaction 2", amount:"$200"},
    {description: "Transaction 3", amount:"$300"},
    {description: "Transaction 4", amount:"$400"},
    {description: "Transaction 5", amount:"$500"},
    {description: "Transaction 6", amount:"$600"},
    {description: "Transaction 7", amount:"$700"},
    {description: "Transaction 8", amount:"$800"}
  ]
  return (
    <div className='flex items-center justify-center h-screen'>
      <Link href={"/dashboard"}>
      <button className='px-4 py-2 bg-white text-black'>Navigate to Dashboard</button>
      </Link>
      
      <div>
       
      </div>

      <div>
      
       
      </div>
    </div>
  )
}

export default Dashboardpage