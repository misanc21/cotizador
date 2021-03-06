import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import {obtenerDiferenciaYear, calcularMarca, obtenerPlan} from '../helper'

const AreaCampo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    border-radius: 4px;;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
    
`

const Button = styled.button`
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #FFFFFF;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    margin-top: 1rem;

    transition: background-color .3s ease;

    &:hover {
        background-color: #26C6DA;
        cursor:pointer;
    }
`
const Error = styled.div `
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`

const Formulario = ({ setResumen, setCargando })=>{

    const [datos, setDatos] = useState({
        marca:'',
        year:'',
        plan:''
    })

    const {marca, year, plan} = datos

    const obtener = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const [error, setError] = useState (false)

    const cotizarSeguro = e => {
        e.preventDefault()

        if(marca.trim()==='' || year.trim()=== '' || plan.trim()===''){
            setError(true)
            return
        }
        setError(false)

        let resultado = 2000;
        const diferencia = obtenerDiferenciaYear(year)
        const incremento = obtenerPlan(plan)

        resultado -= ((diferencia * 3) * resultado) / 100
        resultado = calcularMarca(marca) * resultado
        resultado = parseFloat(incremento * resultado).toFixed(2)

        setCargando(true)
        setTimeout(() => {
            setCargando(false)
            setResumen({
                cotizacion: Number(resultado),
                datos: datos
            })
        }, 3000);

        
    }

    return (
        <form
            onSubmit = {cotizarSeguro}    
        >
            {error? <Error>Todos los campos son obligatorios</Error>:null}
            <AreaCampo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange = {obtener}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="asiatico">Asiatico</option>
                    <option value="europeo">Europeo</option>
                </Select>
            </AreaCampo>
            <AreaCampo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange = {obtener}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </AreaCampo>
            <AreaCampo>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked= {plan === 'basico'}
                    onChange = {obtener}
                />Basico
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked= {plan === 'completo'}
                    onChange = {obtener}
                />Completo
            </AreaCampo>
            <Button type="submit">Cotizar</Button>
        </form>
    )
}

Formulario.propTypes = {
    setResumen: PropTypes.func.isRequired, 
    setCargando: PropTypes.func.isRequired
}

export default Formulario