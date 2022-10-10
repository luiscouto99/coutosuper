import React from 'react'

import Header from '../../components/Header'
import Hero from './components/Hero'
import Banner from './components/Banner'
import { Container, Main } from '../../styles/sharedStyles'
import ProductCarrousel from './components/ProductCarrousel'

const Home = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Hero />
        <Banner />
        <ProductCarrousel />
      </Main>
    </Container>
  )
}

export default Home