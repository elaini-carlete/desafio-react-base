import React from 'react'
import './index.css'

const StyledText = ({color, background, opacity}) => {
    return(
        <div className='texts'
        style={{textTransform: "uppercase", color: color, background: background, opacity: opacity}}>
            <h1>Desafio React:</h1>
            <p>Este é o desafio 1!</p>
            <p>E o objetivo é colocar este parágrafo colorido e com as letras maiúsculas usando o jsx.</p>
        </div>
    )
}

StyledText.defaultProps = {
    color:'#000000',
    background: '#ffffff',
    opacity: 0.6
}

export default StyledText