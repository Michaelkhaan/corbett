import React from 'react'

interface Props{
    className?:string
}

function Spinner({className}:Props) {
  return (
    <div className={`w-5 aspect-square border-2 border-gray border-t-white animate-spin rounded-full ${className} `}/>

    
  )
}

export default Spinner