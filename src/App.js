import React from 'react';
import styled from '@emotion/styled'

import Header from './components/Header'
import Formulario from './components/Formulario'

const Contenedor = styled.div `
  max-width: 600px;
  margin: 0 auto;
  margin-top: 1rem;
`;

const ContenedorForm = styled.div`
  background: #FFFFFF;
  padding: 3rem;
`;

function App() {
  return (
    <Contenedor>
      <Header 
        titulo = "COTIZADOR DE SEGUROS"
      />
      <ContenedorForm>
        <Formulario />
      </ContenedorForm>
    </Contenedor>
  );
}

export default App;
