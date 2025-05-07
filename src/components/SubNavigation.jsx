// SubNavigation.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const SubNavigation = ({ category, setCategory }) => {
  const [show, setShow] = useState(false);
  const categories = ['All', 'Fruit', 'Pulses'];

  return (
    <div className="h-[7vh] flex items-center justify-center bg-[#1e293bee] text-[#F1F5F9]">
      <div className="rounded-full flex items-center justify-center w-[40vw] h-[7vh] relative">
        <a className="mx-2" href="/">Home</a>
        <div className="mx-2 relative">
          <button onClick={() => setShow(!show)} className='cursor-pointer'>
            Categories <FontAwesomeIcon icon={faCaretDown} className={`ml-1 transition-transform ${!show ? 'rotate-180' : 'rotate-0'}`} />
          </button>
          {show && (
            <div className="absolute mt-2 border border-white rounded-[0.3rem] z-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setCategory(cat);
                    setShow(false);
                  }}
                  className={`block w-full px-4 py-2 text-left ${category === cat ? 'text-green-600' : 'text-white'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
        <a className="mx-2" href="/">Contact</a>
        <a className="mx-2" href="/">Blog</a>
      </div>
    </div>
  );
};

export default SubNavigation;
