import React from 'react'
import { FaRegCircleCheck } from 'react-icons/fa6'

export default function Highlight() {
  return (
    <div>
      <h1 className='text-[16px] text-[#000000] font-bold font-frinkRio leading-[26px]'>Highlights</h1>
      <ul className='text-[#000000] leading-[34px] font-Gotham  text-[14px]'>
       <span className='flex items-center gap-2'><FaRegCircleCheck /> <li>Beautiful beachfront</li></span>
       <span className='flex items-center gap-2'><FaRegCircleCheck /> <li>Ultimate outdoor pool</li></span>
       <span className='flex items-center gap-2'> <FaRegCircleCheck /><li>Doctor on call</li></span>
       <span className='flex items-center gap-2'><FaRegCircleCheck /><li>Romantic dinner arrangements</li></span>
       <span className='flex items-center gap-2'> <FaRegCircleCheck /> <li>Modern rooms</li></span>
      </ul>
      
    </div>
  )
}
