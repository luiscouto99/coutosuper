import React from 'react'

import { ButtonLink } from '../../../styles/sharedStyles'

import hero from '../../../assets/hero.jpg'

import styled from 'styled-components/macro'

const HeroContainer = styled.section`
  display: flex;
  column-gap: 10px;
  margin-top: 108px;

  @media (max-width: 1320px) {
    flex-direction: column-reverse;
  }
`;

const Information = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 3px;
  background: hsla(217, 99%, 29%, 1);
  background: linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  background: -moz-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  background: -webkit-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#013893", endColorstr="#008651", GradientType=1 );

  @media (max-width: 1320px) {
    margin-top: 10px;
    width: 100%;
    height: 400px;
  }

  @media (max-width: 617px) {
    height: 545px;
  }
`;

const Block = styled.div`
  height: 794px;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  color: var(--logo-blue);

  @media (max-width: 1320px) {
    height: 100%;
    padding: 40px;
  }
`;

const HeroTitle = styled.h1`
  text-align: center;
  font-size: 36px;
  margin-bottom: 12px;
  background: -webkit-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 625px) {
    font-size: 32px;
  }
`;

const HeroSlogan = styled.h2`
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 24px;

  @media (max-width: 625px) {
    font-size: 18px;
  }
`;

const HeroDescription = styled.p`
  line-height: 1.6;
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 800px;
  border-radius: 10px;
  padding: 3px;
  background: linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  background: -moz-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  background: -webkit-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);

  @media (max-width: 1320px) {
    height: 600px;
  }

  @media (max-width: 617px) {
    height: 475px;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-image: url(${hero});
  background-position: top center;
  filter: saturate(90%);
  background-size: cover;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Information>
        <Block>
          <HeroTitle>Supermercado Couto</HeroTitle>
          <HeroSlogan>Comprar com confiança</HeroSlogan>
          <HeroDescription>
            Mercados Couto, mais conhecido por Supermercado Couto, o supermercado da família, foi fundado em 1985 e desde sempre tem vindo a distinguir-se por proporcionar aos seus clientes uma vasta variedade de produtos com qualidade e simpatia ao melhor preço.
          </HeroDescription>
          <ButtonLink to='/sobre-nos'>Sobre Nós</ButtonLink>
        </Block>
      </Information>

      <ImageContainer>
        <Image />
      </ImageContainer>
    </HeroContainer>
  )
}

export default Hero