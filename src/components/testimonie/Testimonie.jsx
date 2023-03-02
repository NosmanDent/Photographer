import React from 'react'
import Testimony from './Testimony'

const Testimonie = () => {
  return (
    <div className='mt-20'>
        <div className='flex flex-1 items-center justify-center flex-col'>
            <p className='flex flex-1 text-4xl text-yellow-700 font-bold'>TESTIMONALS</p>
            <p className='text-xs text-gray-500'>Kind Words from our clients</p>
        </div>
        <Testimony />
    </div>
  )
}

export default Testimonie