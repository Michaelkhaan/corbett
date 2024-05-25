import React from 'react'
import { GiOpenedFoodCan } from 'react-icons/gi'

export default function Touricons() {
  return (
    <div className='border border-[#5d5d5d] opacity-0.0000 w-[398px] h-[308px] bg-[#2d2e2500]'>
       <h1 className='text-[16px] text-[#000000] font-bold font-frinkRio leading-[26px] pl-9 my-9'>Tour includes</h1> 
<ul className='flex flex-wrap gap-16 px-9'>
    <span className='flex flex-col items-center'><GiOpenedFoodCan/> <li>Hotel</li></span>
    <span className='flex flex-col items-center'><GiOpenedFoodCan/> <li>Meals</li></span>
    <span className='flex flex-col items-center'><GiOpenedFoodCan/> <li>Transport</li></span>
    <span className='flex flex-col items-center'><GiOpenedFoodCan/> <li>Flight</li></span>
    <span className='flex flex-col items-center'><GiOpenedFoodCan/> <li>Sightseeing</li></span>
</ul>
    </div>
  )
}
