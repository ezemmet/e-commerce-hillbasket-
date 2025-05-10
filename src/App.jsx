import { Footer, Header, Main, Products, SubNavigation, Testimonial } from './js-files/import-components'
import React, { useState } from 'react'

function App() {

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')


  return (
    <div
    >
      <div className='fixed w-full z-10'>
        <Header search={search} setSearch={setSearch} />
        <SubNavigation category={category} setCategory={setCategory} />
      </div>
      <Main />
      <Products search={search} category={category} />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
