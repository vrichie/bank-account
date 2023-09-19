import Image from 'next/image'
import React from 'react'

const AddCard = () => {
  return (
    <div className='bg-white mt-5 rounded-md text-black  w-full px-4 py-4'>
       <div className='flex justify-between '>
       <h1 className="text-left py-4">My card</h1>
        <button className='button'>Add Card</button> 
     </div>
        <div className='flex items-center justify-center m-4'>
        <Image className='rounded-md' src={"/card.jpg"} alt='card' width={300} height={100}/>
        </div>
       
    </div>
  )
}

export default AddCard