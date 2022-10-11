import React from 'react'

import { ButtonLink } from '../../../styles/sharedStyles'

import ProductCard from '../../../components/ProductCard'

import { productsDB } from '../../../productsDB'

import styled from 'styled-components/macro'

const CarrouselContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  margin: 24px 0;
  text-align: center;
`;

const ProductCarrousel = () => {
  return (
    <>
      <CarrouselContainer>
        {
          productsDB.map((product) => <ProductCard key={product.id} product={product} />)
        }
      </CarrouselContainer>
      <ButtonContainer>
        <ButtonLink to='produtos'>Ver Artigos em Promoção</ButtonLink>
      </ButtonContainer>
    </>
  )
}

export default ProductCarrousel