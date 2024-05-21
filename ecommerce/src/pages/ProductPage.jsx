import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDetail from '../components/ProductDetail'

const ProductPage = () => {
  const {productId} = useParams();
  return <ProductDetail productId= {productId}/>
}

export default ProductPage