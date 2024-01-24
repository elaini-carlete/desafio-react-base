import React from 'react'
import './index.css'

const StyledText = ({color}) => {
    return(
        <div className='texts'
        style={{textTransform: "uppercase", color: color}}>
            <h1>Desafio React:</h1>
            <p>Este é o desafio 1!</p>
            <p>E o objetivo é colocar este parágrafo colorido e com as letras maiúsculas usando o jsx.</p>
        </div>
    )
}

StyledText.defaultProps = {
    color:'#b76e79',
}

export default StyledText