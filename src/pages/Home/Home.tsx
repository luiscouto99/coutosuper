import React from "react";

import { Container, Main } from "../../styles/sharedStyles";
import Header from "../../components/Header";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import ProductCarrousel from "../../components/ProductCarrousel";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Hero />
        <Banner />
        <ProductCarrousel marginTop={false} showButton={true} />
      </Main>
      <Footer />
    </Container>
  );
};

export default Home;
