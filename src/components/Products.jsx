import React from 'react'
import ProductCard from './ProductCard'


const Products = ({ search, category }) => {
  return (
    <div>
      <ProductCard search={search} category={category} />

    </div>
  )
}

export default Products
