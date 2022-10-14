import React from "react";

import { Container, Main } from "../../styles/sharedStyles";
import Header from "../../components/Header";
import Information from "./components/Information";

import styled from 'styled-components/macro'
import Horario from "./components/Horario";
import Footer from "../../components/Footer";

const Map = styled.iframe`
  border: 0;
  border-radius: 10px;
`;

const Contactos = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Information />
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.335500578782!2d-8.578320267910078!3d40.754645076830094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd239b87160b7a7d%3A0xf3ce82883ba30487!2sCouto%20-%20Food%20Products%20Markets%2C%20Ltd.!5e0!3m2!1sen!2spt!4v1665504548197!5m2!1sen!2spt"
          width="100%"
          height="600"
          loading="lazy"
        />
        <Horario />
      </Main>
      <Footer />
    </Container>
  );
};

export default Contactos;
