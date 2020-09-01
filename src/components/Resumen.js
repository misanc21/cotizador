import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { primerMayuscula } from '../helper'

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
    border-radius: 4px;
`

const Resumen = ({datos}) => {
    const {marca, year, plan} = datos
    if(marca === '') return null

    return(
        <ContenedorResumen>
            <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Marca: {primerMayuscula(marca)}</li>
                <li>Plan: {primerMayuscula(plan)}</li>
                <li>Año: {primerMayuscula(year)}</li>
            </ul>
        </ContenedorResumen>
    )
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
export default Resumen