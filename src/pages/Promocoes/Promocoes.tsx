import React from "react";

import { Container, Main } from "../../styles/sharedStyles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCarrousel from "../../components/ProductCarrousel";

const Promocoes = () => {
  return (
    <Container>
      <Header />
      <Main>
        <ProductCarrousel marginTop={true} showButton={false} />
      </Main>
      <Footer />
    </Container>
  );
};

export default Promocoes;
