import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const SubNavigation = ({ category, setCategory }) => {
  const [show, setShow] = useState(false);
  const categories = ['All', 'Fruit', 'Pulses'];

  return (
    <div className="bg-[#1e293bee] text-[#F1F5F9]">
      <div className="hidden sm:flex h-[7vh] items-center justify-center">
        <div className="rounded-full flex items-center justify-center w-[40vw] h-[7vh] relative">
          <a className="mx-2" href="/">Home</a>
          <div className="mx-2 relative">
            <button onClick={() => setShow(!show)} className='cursor-pointer'>
              Categories <FontAwesomeIcon icon={faCaretDown} className={`text-cyan-400 ml-1 transition-transform ${!show ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            {show && (
              <div className="absolute mt-2 bg-[#3d495c] rounded-[0.3rem] z-10">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setCategory(cat);
                      setShow(false);
                    }}
                    className={`font-semibold block w-full px-4 py-2 text-center ${category === cat ? 'text-cyan-400' : 'text-amber-400'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
          <a className="mx-2" href="#testimonial">Testimonial</a>
          <a className="mx-2" href="/contact">Contact</a>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="sm:hidden flex flex-col items-center text-sm gap-2 py-2">
        <a href="/" className="hover:text-cyan-400">Home</a>
        <div className="relative">
          <button onClick={() => setShow(!show)} className="flex items-center gap-1">
            Categories
            <FontAwesomeIcon icon={faCaretDown} className={`text-cyan-400 ml-1 transition-transform ${!show ? 'rotate-180' : 'rotate-0'}`} />
          </button>
          {show && (
            <div className="absolute mt-2 bg-[#3d495c] rounded z-10 w-32 shadow">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setCategory(cat);
                    setShow(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm font-semibold ${category === cat ? 'text-cyan-400' : 'text-amber-400'} hover:bg-[#475569]`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
        <a href="#testimonial" className="hover:text-cyan-400">Testimonial</a>
        <a href="/contact" className="hover:text-cyan-400">Contact</a>
      </div>
    </div>
  );
};

export default SubNavigation;
