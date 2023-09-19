import React from 'react'
import { MdMoney } from "react-icons/md"

const Income = () => {
  return (
  <div className='bg-white text-black w-32 md:w-40 h-32 rounded-md flex '>
      <div className=''>
        <div className='flex gap-2 md:gap-6 pt-4 px-4'>
          <h1 className='text-sm md:text-md'>Available Income</h1>
          <span>
            <MdMoney size={34} />
          </span>
        </div>

        <p className='tracking-widest pt-4 pl-4 text-xl font-semibold md:text-2xl'>$ 7800</p>
      </div>
    </div>
  )
}

export default Income
