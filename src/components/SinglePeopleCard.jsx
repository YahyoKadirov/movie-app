import React from 'react'

export const SinglePeopleCard = ({image, title, date,overview, place}) => {
  return (
    <div>  <div className="container pt-[50px] flex text-[20px] px-[50px]">
    <img className='w-[370px] h-[500px]' src={image} alt="" />
     <div className='ml-[60px]'>
      <div className='flex py-1'>
          <h1 className='w-[140px] mr-[20px] hover:text-red-800 px-2 py-2'>Name</h1>
          <h1 className=' w-[100%] px-2 py-2 hover:text-red-800'>{title}</h1>
      </div>
      <div className='flex py-1'>
          <h1 className='w-[140px] mr-[20px] hover:text-red-800 px-2 py-2'>Date</h1>
          <h1 className=' w-[100%] px-2 py-2 hover:text-red-800'>{date}</h1>
      </div>
     
      <div className='flex py-1'>
          <h1 className='w-[140px] mr-[20px] hover:text-red-800 px-2 py-2'>Place of Birth</h1>
          <h1 className=' w-[100%] px-2 py-2 hover:text-red-800'>{place}</h1>
      </div>

      <p className='text-[22px] overflow-hidden overscroll-y-contain font-sanserif mt-2 mb-2 text-red-700 h-[300px]'>{overview}</p>
      
     </div>
  </div> </div>
  )
}