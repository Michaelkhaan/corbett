import Model from '@/components/Model'
import Spinner from '@/components/spinner'
import React, { useState } from 'react'

function Index() {

    const [open,setOpen]=useState(false)
    const loading=false
  return (
    <div>
<div className='flex items-center justify-center flex-col '>
    <h1 className='text-blue-400 text-2xl mt-3 font-bold'>Admin Panel - Packages</h1>
    <button className='  bg-blue-400 text-white w-36 h-10 rounded flex items-center justify-center mt-5'>Add Packages</button>
</div>
{/* <div className='bg-slate-400 w-[350px] h-[450px]'>
    <div className='ml-5'>
        <h1>Main Package image</h1>
        <img src="/image.png" alt="" className='rounded' />

    </div>
    <span>Name</span>
    <input type="text" className=''/>
</div> */}
<div className='w-1/4 shadow-card mt-5 px-3 py-3 rounded'>
<h1>Main Package Image</h1>
<img src="/deer.png" alt="" className='w-full' />
<div className='flex flex-col'>
    <label htmlFor="">Name</label>
    <input type="text" placeholder='Beach Paradise' className='border p-[3px] rounded'/>
    
</div>
{/* test dev */}
<div className='flex flex-col mt-3'>
    <label htmlFor="">Title</label>
    <input type="text"placeholder ='Ultimate Beachfront Experience' className='border p-[3px] rounded' />
    
</div>
{/* update delete, */}
<div className='w-full flex items-center justify-between pb-3'>
<button onClick={()=>{setOpen(true)}} className='bg-[#e9b306] w-[70px] h-[35px] rounded mt-3'>Update </button>
<button className='bg-[#ed4444] w-[70px] h-[35px] rounded mt-3'>
    {loading?<Spinner/>:"Delete"}
</button>
    
</div>
</div>
<Model onClose={()=>{setOpen(false)}} show={open} containerClass='bg-white'>
    update
</Model>
    </div>
  )
}

export default Index