import React from 'react'
import './Spinner.css'
import styled from '@emotion/styled'

const ContenedorSpinner = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 1rem;
`

const Spinner = () => {
    return (
        <ContenedorSpinner>
        <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
        </ContenedorSpinner>
    )
}

export default Spinner