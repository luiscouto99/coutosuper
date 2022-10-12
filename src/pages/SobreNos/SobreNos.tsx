import React from "react";

import { Container, Main } from "../../styles/sharedStyles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import about1 from '../../assets/about1.jpg';
import about2 from '../../assets/about2.png';
import about3 from '../../assets/about3.png';

import styled, { css } from 'styled-components/macro'

const CardsContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 108px;
  border-radius: 10px;
  gap: 80px;
`;

type CardProps = {
  alignRight?: boolean;
}
const Card = styled.div<CardProps>`
  border-radius: 10px;
  min-height: 600px;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;

  &:first-child {
    background-image: url(${about1});
  }
  
  &:nth-child(2) {
    background-image: url(${about2});
  }
  
  &:last-child {
    background-image: url(${about3});
  }

  ${(props) => props.alignRight && css`
    justify-content: flex-end;
  `}
`;

type CardTextProps = {
  alignRight?: boolean;
}
const CardText = styled.h2<CardTextProps>`
  border-radius: 10px;
  width: 50%;
  padding: 40px;
  margin-left: 80px;
  line-height: 1.5;
  font-weight: 600;
  color: white;
  background: linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  background: -moz-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  background: -webkit-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);

  ${(props) => props.alignRight && css`
    margin-left: 0;
    margin-right: 80px;
  `}
`;

const SobreNos = () => {
  return (
    <Container>
      <Header />
      <Main>
        <CardsContainer>
          <Card>
            <CardText>
              Fundada em 1985, por António de Oliveira Couto e seus familiares a empresa distinguiu-se desde o início pela adopção de formas de comercialização já mais evoluídas em relação ao esquema tradicional deste tipo de estabelecimentos e por uma política de baixos preços, contentando-se com margens de comercialização mínimas.
            </CardText>
          </Card>

          <Card alignRight>
            <CardText alignRight>
              Estes factores aliados com o bom atendimento prestado aos clientes, provocou o crescimento da clientela bem como o alargamento da gama de produtos. Aos longo dos anos a empresa foi aumentando e modernizando as suas instalações, culminando em 1999 com a mudança para as instalações actuais, as quais possui uma área de vendas com cerca de 700mxm e um parque de estacionamento para 45 viaturas.
            </CardText>
          </Card>

          <Card>
            <CardText>
              Apesar disso esta nunca abdicou dos seus princípios de proporcionar aos seus clientes os melhores produtos sempre a melhor preço, aliados com a simpatia e bom atendimento de todos os seus colaboradores, a prova disso são as duas vezes que a firma foi considerada pela revista PROTESTE como o estabelecimento mais barato do país, sendo que nos outros anos foi sempre um dos supermercados mais baratos do concelho de Estarreja e do país.
            </CardText>
          </Card>

        </CardsContainer>
      </Main>
      <Footer />
    </Container>
  );
};

export default SobreNos;
