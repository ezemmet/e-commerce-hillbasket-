import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Header = ({ search, setSearch }) => {

  const [isFocused, setIsFocused] = useState(false)

  const handleOnclick = () => {
    alert('Cureently Unavaialable!')
  }

  const count = '10'

  return (
    <div className='grid grid-cols-12 h-[9vh] items-center px-[3rem] bg-[#1E293B] text-[#F1F5F9]'>
      <div className='col-span-2 grid text-center items-center h-[8vh]'>
        <h1 className='font-Raleway'>
          <span className='text-3xl font-bold text-[#38BDF8]'>hill</span>
          <span className='text-3xl font-bold text-[#FBBF24]'>basket</span>
          <span className='font-bold text-[#F1F5F9]'>.in</span>
        </h1>
      </div>

      <div className='col-span-2 font-Poppins grid items-center justify-center h-[8vh] '>
        <p className='text-[12px] ml-[1rem]'>
          Deliver to Nikhil
        </p>
        <div className='flex'>
          <FontAwesomeIcon icon={faLocationDot} className='' />
          <p className='text-[14px] ml-[0.3rem]'>Almora 263656</p>
        </div>
      </div>

      <div className='col-span-6 h-[8vh] grid items-center justify-center'>
        <div className={`bg-white text-black p-2 rounded w-[45vw] h-[6vh] flex items-center box-border ${isFocused ? 'border-[3px] p-[6px]' : 'border border-[#ff9900] p-[8px]'} border-[#ff9900] `}>
          <input
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text" placeholder='Search' className='w-full outline-none px-[5px]' />
          <FontAwesomeIcon icon={faMagnifyingGlass} className=' rounded text-xl p-[5px] cursor-pointer' />
        </div>
      </div>

      <div className='relative col-span-1 flex items-center justify-center h-[8vh]'>
        <FontAwesomeIcon icon={faCartShopping} className='text-2xl' />
        {count !== '0' && (
          <span className='absolute top-[0%] right-[20%] bg-amber-400 text-[#39424b] text-xs font-bold px-1.5 py-[1px] rounded-full border border-white shadow-sm transition-all duration-200'>
            {count}
          </span>
        )}
      </div>

      <div className='col-span-1 h-[8vh] font-Quicksand grid items-center justify-center'>
        <button onClick={handleOnclick} className='bg-indigo-500 text-white hover:bg-indigo-600 border rounded px-2 py-1 cursor-pointer transition-colors duration-200'>Login</button>
      </div>
    </div>
  )
}

export default Header
