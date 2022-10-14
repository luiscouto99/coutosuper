import React from 'react'

import { categoriesDB } from '../categoriesDB';

import CategoryCard from './CategoryCard';

import styled from "styled-components/macro";

const CarrouselContainer = styled.section`
  margin-top: 108px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  gap: 150px;
`;

const CategoryCarrousel = () => {
    return (
        <CarrouselContainer>
            {categoriesDB.map((category) => (
                <CategoryCard key={category.id} category={category} />
            ))}
        </CarrouselContainer>
    )
}

export default CategoryCarrousel