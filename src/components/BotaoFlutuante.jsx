import React from 'react';
import './BotaoFlutuante.css';

function BotaoFlutuante({ onClick }) {
    return (
        <button className="botao-flutuante" onClick={onClick}>
            +
        </button>
    );
}

export default BotaoFlutuante;
