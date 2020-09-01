import React from 'react'
import styled from '@emotion/styled'

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

const Formulario = ()=>{
    return (
        <form>
            <AreaCampo>
                <Label>Marca</Label>
                <Select>
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="asiatico">Asiatico</option>
                    <option value="europeo">Europeo</option>
                </Select>
            </AreaCampo>
            <AreaCampo>
                <Label>Año</Label>
                <Select>
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
                />Basico
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="Completo"
                />Completo
            </AreaCampo>
            <Button>Cotizar</Button>
        </form>
    )
}

export default Formulario