import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faLocationDot, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = ({ search, setSearch }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const count = '10'

  const handleOnclick = () => {
    alert('Currently Unavailable!')
  }

  return (
    <div className="bg-[#1E293B] text-[#F1F5F9] px-4 py-2">
      {/* Large screen layout */}
      <div className="hidden lg:grid grid-cols-12 h-[9vh] items-center px-[3rem]">
        <div className='col-span-2 grid text-center items-center h-[8vh]'>
          <h1 className='font-Raleway'>
            <span className='text-3xl font-bold text-[#38BDF8]'>hill</span>
            <span className='text-3xl font-bold text-[#FBBF24]'>basket</span>
            <span className='font-bold text-[#F1F5F9]'>.in</span>
          </h1>
        </div>

        <div className='col-span-2 font-Poppins grid items-center justify-center h-[8vh] '>
          <p className='text-[12px] ml-[1rem]'>Deliver to Nikhil</p>
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
          <button onClick={handleOnclick} className='bg-amber-400 font-semibold text-[#2b2828] hover:bg-amber-600 border rounded px-2 py-1 cursor-pointer transition-colors duration-200'>Login</button>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex justify-between items-center">
        <h1 className='font-Raleway text-xl font-bold'>
          <span className='text-[#38BDF8]'>hill</span>
          <span className='text-[#FBBF24]'>basket</span>
        </h1>

        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faCartShopping} className='text-xl' />
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {menuOpen && (
        <div className="mt-2 flex flex-col gap-3 text-sm">
          <p className='flex items-center gap-2'><FontAwesomeIcon icon={faLocationDot} /> Almora 263656</p>
          <div className={`bg-white text-black rounded w-full h-[6vh] flex items-center border border-[#ff9900]`}>
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              placeholder='Search'
              className='w-full outline-none px-2'
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-xl px-2 cursor-pointer' />
          </div>
          <button onClick={handleOnclick} className='bg-amber-400 w-fit px-3 py-1 rounded text-sm font-semibold text-[#2b2828]'>
            Login
          </button>
        </div>
      )}
    </div>
  )
}

export default Header;
