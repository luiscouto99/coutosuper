import React from "react";

import { Container, Main } from "../../styles/sharedStyles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCarrousel from "../../components/ProductCarrousel";

const Produtos = () => {
  return (
    <Container>
      <Header />
      <Main>
        <ProductCarrousel marginTop={true} />
      </Main>
      <Footer />
    </Container>
  );
};

export default Produtos;
