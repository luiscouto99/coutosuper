import React from 'react'

import { ProductCategory } from '../types/productCategory';

import styled from 'styled-components/macro';

const CategoryContainer = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 3px;
  background: hsla(217, 99%, 29%, 1);
  background: linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  background: -moz-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  background: -webkit-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#013893", endColorstr="#008651", GradientType=1 );

  @media (max-width: 1210px) {
    max-width: 363px;
  }
`;

const Block = styled.div`
  height: 200px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--logo-blue);
`;

const ImgContainer = styled.div`
  max-height: 300px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  background-color: white;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const InfoContainer = styled.div`
  margin: 0 20px;
  text-align: center;
`;

const Category = styled.h2`
  text-transform: uppercase;
  background: -webkit-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  margin-bottom: 36px;
`;

const CategoryCard = ({ category }: { category: ProductCategory }) => {
  return (
    <CategoryContainer>
      <ImgContainer>
        <Image src={category.image} alt="product image" />
      </ImgContainer>
      <Block>
        <InfoContainer>
          <Category>{category.category}</Category>
          <Description>{category.description}</Description>
        </InfoContainer>
      </Block>
    </CategoryContainer>
  )
}

export default CategoryCard