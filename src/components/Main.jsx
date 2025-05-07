import React from 'react'
import BG from '../images/main-bg-1.jpg'


const Main = () => {

  return (
    <section className='bg-[#1E293B] text-[#F1F5F9] h-[100vh] flex items-center px-8 md:px-16 pt-[5rem] text-center'>
      <div className='items-center w-full'>
        <div>
          <h1 className='text-4xl md:text-5xl font-bold font-Raleway mb-4 leading-tight'>
            Fresh Products from the <span className='text-amber-400'>Hills</span>,<br />
            Delivered to your <span className='text-cyan-400'>Basket</span>.
          </h1>
          <p className='text-lg text-slate-300 mb-6'>
            Shop locally-sourced goods, organic produce, and handcrafted items from the heart of the hills — all in one place.
          </p>
          <button className='bg-amber-400 text-[#1E293B] hover:bg-amber-500 font-semibold px-6 py-3 rounded-lg transition-colors duration-200'>
            Shop Now
          </button>
        </div>



      </div>
    </section>
  )
}

export default Main
