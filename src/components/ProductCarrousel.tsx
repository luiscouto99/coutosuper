import React from "react";

import { ButtonLink } from "../styles/sharedStyles";

import ProductCard from "./ProductCard";

import { productsDB } from "../productsDB";

import styled from "styled-components/macro";

type CarrouselProps = {
  marginTop: boolean;
};
const Carrousel = styled.div<CarrouselProps>`
  margin-top: ${(props) => props.marginTop ? '108px' : '0'};
`;

const CarrouselContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  margin: 84px 0 24px;
  text-align: center;
`;

const ProductCarrousel = ({ marginTop, showButton }: { marginTop: boolean, showButton: boolean }) => {
  return (
    <Carrousel marginTop={marginTop}>
      <CarrouselContainer>
        {productsDB.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CarrouselContainer>
      {showButton && (
        <ButtonContainer>
          <ButtonLink to="promocoes">Ver Artigos em Promoção</ButtonLink>
        </ButtonContainer>
      )}
    </Carrousel>
  );
};

export default ProductCarrousel;
