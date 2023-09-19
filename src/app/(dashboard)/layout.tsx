import React from 'react'
import HeadNav from '@/components/layout/headNav'
import SideNav from '@/components/layout/sideNav'

export default function Dashboard({children}:{children: React.ReactNode;}){
  return (
    <div className='flex w-full items-start justify-between'>
      <div className='w-[200px]'>

      <SideNav/>
      </div>
     <main className='flex-1'>
     {children}
    
     </main>

    </div>
  )
}