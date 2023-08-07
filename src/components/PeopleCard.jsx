import React from 'react'
import { NavLink } from 'react-router-dom'

export const PeopleCard = ({id , image, title}) => {
  return (
   <NavLink to={`/single-person/${id}`}>
     <div className=' rounded-lg  mb-8  w-[280px]' >
    <img className='w-[280px] h-[400px]' src={image} alt="" />
    <div className=' rounded-lg p-3 bg-red-900'>
    <h1 className='text-[20px] text-center hover:text-black'>{title}</h1>
    </div>
   </div>
   </NavLink>
  )
}