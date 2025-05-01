import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";


const SubNavigation = () => {

  const [show, setShow] = useState(false)

  const categoriesOnClick = (e) => {
    e.preventDefault()
    setShow(!show)
  }

  return (
    <div className='h-[7vh] flex items-center justify-center'>
      <div className="rounded-[50px] items-center justify-center flex w-[40vw] bg-[#63752c] text-[#C1C7AA] h-[7vh]">
        <a className='mx-2 font-semibold' href="/">Home</a>
        <div className='mx-2'>
          <button onClick={categoriesOnClick} className="relative font-semibold" href="/">Categories <FontAwesomeIcon icon={faCaretDown} className={`transform transition-transform duration-300 ${!show ? 'rotate-180' : 'rotate-0'}`} /></button>
          {show && (
            <div className={`absolute flex flex-col text-center`}>
              <a href="/" className='hover:text-[#C2782B] font-semibold'>Fruits</a>
              <a href="/" className='hover:text-[#C2782B] font-semibold'>Vegetable</a>
            </div>
          )}
        </div>
        <a className='mx-2 font-semibold' href="/">Contact</a>
        <a className='mx-2 font-semibold' href="/">Blog</a>
      </div>

    </div>
  )
}

export default SubNavigation
