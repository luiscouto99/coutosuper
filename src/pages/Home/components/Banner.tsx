import React from 'react'

import { SecondaryButtonLink, LinkContainer } from '../../../styles/sharedStyles'

import banner from '../../../assets/banner.png'

import styled from 'styled-components/macro'

const BannerContainer = styled.section`
  width: 100%;
  padding: 40px 128px;
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  background: linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  background: -moz-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  background: -webkit-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);

  @media (max-width: 1320px) {
    text-align: center;
    width: 480px;
    margin: 54px auto;
    flex-direction: column-reverse;
    padding: 40px;
  }

  @media (max-width: 617px) {
    width: 100%;
  }
`;

const BannerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const BannerTitle = styled.h2`
  font-size: 28px;
  margin: 0;

  @media (max-width: 1720px) {
    font-size: 24px;
  }

  @media (max-width: 617px) {
    font-size: 18px;
  }
`;

const BannerDescription = styled.p`
  line-height: 1.6;
  margin-top: 12px;
  margin-bottom: 40px;
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const Image = styled.img`
    max-width: 600px;
    border-radius: 8px;

  @media (max-width: 1720px) {
    max-width: 400px;
  }

  @media (max-width: 617px) {
    max-width: 100%;
  }
`;

const LinkAlign = styled.div`
  @media (max-width: 1320px) {
    display: flex;
    justify-content: center;
  }
`;

const Banner = () => {
    return (
        <BannerContainer>
            <BannerInfo>
                <BannerTitle>Os melhores frescos,</BannerTitle>
                <BannerTitle>todos os dias ao melhor preço.</BannerTitle>
                <BannerDescription>
                    Tudo aquilo que precisa, para o seu dia-a-dia.
                </BannerDescription>
                <LinkAlign>
                    <LinkContainer>
                        <SecondaryButtonLink to='/produtos'>Produtos</SecondaryButtonLink>
                    </LinkContainer>
                </LinkAlign>
            </BannerInfo>
            <ImageContainer>
                <Image src={banner} alt="banner image" />
            </ImageContainer>
        </BannerContainer>
    )
}

export default Banner