import React, {useState} from 'react';
import styled from '@emotion/styled'

import Header from './components/Header'
import Formulario from './components/Formulario'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'

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

  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca:'',
      year:'',
      plan:''
    }
  })

  const { cotizacion, datos } = resumen

  return (
    <Contenedor>
      <Header 
        titulo = "COTIZADOR DE SEGUROS"
      />
      <ContenedorForm>
        <Formulario 
          setResumen = {setResumen}
        />
        <Resumen
          datos={datos}
        />
        <Resultado
          cotizacion={cotizacion}
        />
      </ContenedorForm>
    </Contenedor>
  );
}

export default App;
