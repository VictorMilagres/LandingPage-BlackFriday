import React from 'react';
import Header from './components/Header';
import { GlobalStyle } from './global'
import Email from './components/Email';
import Promocoes from './components/Promocoes';
import Produtos from './components/Produtos';
import Footer from './components/Footer';



function App() {
  return (
    <>
    <Header/>
    <Email/>
    <Promocoes/>
    <Produtos/>
    <Footer/>
    <GlobalStyle />
    </>
  );
}

export default App;
