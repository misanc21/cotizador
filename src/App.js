import React, {useState, Fragment} from 'react';
import styled from '@emotion/styled'

import Header from './components/Header'
import Formulario from './components/Formulario'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

const Contenedor = styled.div `
  max-width: 600px;
  margin: 0 auto;
  margin-top: 1rem;
`;

const ContenedorForm = styled.div`
  background: #FFFFFF;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;

`;

function App() {

  const [cargando, setCargando] = useState (false)

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
          setCargando = {setCargando}
        />
        {cargando ? <Spinner/>: (
          <Fragment>
            <Resumen
              datos={datos}
            />
            <Resultado
              cotizacion={cotizacion}
            />
          </Fragment>
        )}
        
      </ContenedorForm>
    </Contenedor>
  );
}

export default App;
