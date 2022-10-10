import React from 'react'

import ProductCard from '../../../components/ProductCard'

import { productsDB } from '../../../productsDB'

import styled from 'styled-components/macro'

const CarrouselContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

const ProductCarrousel = () => {
  return (
    <CarrouselContainer>
      {
        productsDB.map((product) => <ProductCard key={product.id} product={product} />)
      }
    </CarrouselContainer>
  )
}

export default ProductCarrousel