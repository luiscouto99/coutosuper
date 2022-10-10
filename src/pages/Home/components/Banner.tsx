import React from 'react'

import { ButtonLink, LinkContainer } from '../../../styles/sharedStyles'

import banner from '../../../assets/banner.png'

import styled from 'styled-components/macro'

const BannerContainer = styled.section`
  width: 100%;
  padding: 40px 300px;
  border-radius: 10px;
  color: white;
  display: flex;
  background: linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  background: -moz-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  background: -webkit-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
`;

const BannerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const BannerTitle = styled.h2`
  font-size: 28px;
`;

const BannerDescription = styled.p`
  line-height: 1.6;
`;

const ImageContainer = styled.div`
`;

const Image = styled.img`
    max-width: 600px;
    border-radius: 8px;
`;

const Banner = () => {
    return (
        <BannerContainer>
            <BannerInfo>
                <BannerTitle>
                    Os melhores frescos, todos os dias ao melhor preço.
                </BannerTitle>
                <BannerDescription>
                    Tudo aquilo que precisa, para o seu dia-a-dia.
                </BannerDescription>
                <LinkContainer>
                    <ButtonLink secondary to='/produtos'>Produtos</ButtonLink>
                </LinkContainer>
            </BannerInfo>
            <ImageContainer>
                <Image src={banner} alt="banner image" />
            </ImageContainer>
        </BannerContainer>
    )
}

export default Banner