import React from 'react'
import { MdAccountBalance } from "react-icons/md"

const LedgerBalance = () => {
  return (
   <div className='bg-white text-black md:w-40 w-32  h-32 rounded-md flex '>
      <div className=''>
        <div className='flex gap-2 md:gap-6 pt-4 px-4'>
          <h1 className='text-sm md:text-md'>Ledger Balance</h1>
          <span>
            <MdAccountBalance size={34} />
          </span>
        </div>

        <p className='tracking-widest pt-4 pl-4 text-xl font-semibold md:text-2xl'>$ 3000</p>
      </div>
    </div>
  )
}

export default LedgerBalance
