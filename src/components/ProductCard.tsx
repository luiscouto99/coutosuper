import React from 'react'

import { Product } from '../types/product';

import styled from 'styled-components/macro'

const ProductContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 3px;
  background: hsla(217, 99%, 29%, 1);
  background: linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  background: -moz-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  background: -webkit-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#013893", endColorstr="#008651", GradientType=1 );
`;

const Block = styled.div`
  height: 350px;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  color: var(--logo-blue);
`;

const ProductImg = styled.img``;

const ProductName = styled.h3``;

const ProductBrand = styled.p``;

const ProductPrice = styled.h2``;

const ProductCard = ({ product } : {product: Product}) => {
  console.log(product.image)
  return (
    <ProductContainer>
      <Block>
        <ProductImg src={product.image} alt="product image" />
        <ProductName>{product.name}</ProductName>
        <ProductBrand>{product.brand}</ProductBrand>
        <ProductPrice>{product.price}</ProductPrice>
      </Block>
    </ProductContainer>
  )
}

export default ProductCard