import React from "react";

import { Container, Main } from "../../styles/sharedStyles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CategoryCarrousel from "../../components/CategoryCarrousel";

const Produtos = () => {
  return (
    <Container>
      <Header />
      <Main>
        <CategoryCarrousel />
      </Main>
      <Footer />
    </Container>
  );
};

export default Produtos;
