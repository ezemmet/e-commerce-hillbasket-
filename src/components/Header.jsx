import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

  const [isFocused, setIsFocused] = useState(false)

  const handleOnclick = () => {
    console.log('Logged in');
  }

  const count = '4'

  return (
    <div className='grid grid-cols-12 h-[9vh] text-center mx-[3rem] bg-[#1F3D2B] items-center text-[#C1C7AA] '>
      <div className='col-span-2 grid text-center items-center h-[8vh]'>
        <h1 className='font-Raleway'>
          <span className='text-4xl font-bold text-[#008080]'>hill</span>
          <span className='text-4xl font-bold text-[#E2725B]'>basket</span>
          <span className='font-bold'>.in</span>
        </h1>
      </div>

      <div className='col-span-2 font-Poppins grid items-center justify-center h-[8vh] '>
        <p className='font-semibold text-sm ml-[0.3rem]'>
          Deliver to Nikhil
        </p>
        <div className='flex'>
          <FontAwesomeIcon icon={faLocationDot} className='text-xl' />
          <p className='font-semibold ml-[0.3rem]'>Almora 263656</p>
        </div>
      </div>

      <div className='col-span-6 h-[8vh] grid items-center justify-center'>
        <div className={`p-2 rounded w-[45vw] h-[6vh] flex items-center box-border ${isFocused ? 'border-[2px] p-[7px]' : 'border border-[#258300] p-2'} border-[#258300] `}>
          <input
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            type="text" placeholder='Search' className='w-full outline-none px-[5px]' />
          <FontAwesomeIcon icon={faMagnifyingGlass} className='text-xl p-[5px] text-[#288d00] cursor-pointer' />
        </div>
      </div>

      <div className='col-span-1 h-[8vh] grid items-center justify-center text-2xl relative'>
        <FontAwesomeIcon icon={faCartShopping} />
        <span className='absolute top-0 left-[15px] text-base h-[25px] w-[25px] rounded-[50%] text-red-600 font-bold bg-[#fff]'>{count}</span>
      </div>

      <div className='col-span-1 h-[8vh] font-Quicksand font-bold grid items-center justify-center'>
        <button onClick={handleOnclick} className='border-2 rounded px-[0.5rem] py-[0.25rem] cursor-pointer'>Login</button>
      </div>
    </div>
  )
}

export default Header
