import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import Contactos from './pages/Contactos/Contactos';
import Home from './pages/Home/Home';
import Produtos from './pages/Produtos/Produtos';
import Promocoes from './pages/Promocoes/Promocoes';
import SobreNos from './pages/SobreNos/SobreNos';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre-nos' element={<SobreNos />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/promocoes' element={<Promocoes />} />
        <Route path='/contactos' element={<Contactos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
