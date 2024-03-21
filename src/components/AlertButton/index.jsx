import React from 'react'
import './index.css'

const AlertButton = ({label}) => {
    return <div className='button'><button type='button' onClick={() => alert(label)}>Desafio 2</button></div>
}

AlertButton.defaultProps = {
    label: 'A label desse botão é Desafio 2'
}

export default AlertButton