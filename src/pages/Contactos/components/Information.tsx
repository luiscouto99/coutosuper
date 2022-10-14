import React from 'react'

import location from '../../../assets/location.png'
import email from '../../../assets/email.png'
import mobile from '../../../assets/mobile.png'

import styled from 'styled-components/macro';

const InfoDisplay = styled.section`
    margin-top: 108px;
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: space-between;
    gap: 10px;

    @media (max-width: 1090px) {
        flex-direction: column;
    }
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 190px;
  border-radius: 10px;
  padding: 3px;
  background: hsla(217, 99%, 29%, 1);
  background: linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  background: -moz-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  background: -webkit-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#013893", endColorstr="#008651", GradientType=1 );
`;

const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0;
    border-radius: 8px;
    background-color: white;
    color: white;
    height: 100%;
`;

const InfoTitle = styled.h2`
    margin-bottom: 0;
  background: -webkit-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const InfoDescription = styled.h3`
    font-weight: 500;
    color: var(--logo-blue);
    margin-bottom: 0;
`;

const InfoImage = styled.img`

`;

const Information = () => {
    return (
        <InfoDisplay>
            <InfoContainer>
                <InfoBlock>
                    <InfoImage src={location} />
                    <InfoTitle>Morada</InfoTitle>
                    <InfoDescription>Rua Desembargador Correia Teles <br /> 188, 3860-362 Estarreja</InfoDescription>
                </InfoBlock>
            </InfoContainer>

            <InfoContainer>
                <InfoBlock>
                    <InfoImage src={email} />
                    <InfoTitle>Email</InfoTitle>
                    <InfoDescription>geral@coutosuper.pt</InfoDescription>
                </InfoBlock>
            </InfoContainer>

            <InfoContainer>
                <InfoBlock>
                    <InfoImage src={mobile} />
                    <InfoTitle>Telefone</InfoTitle>
                    <InfoDescription>234 843 587</InfoDescription>
                </InfoBlock>
            </InfoContainer>
        </InfoDisplay>
    )
}

export default Information