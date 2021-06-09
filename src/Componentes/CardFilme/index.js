import React from 'react';
import './style.css'

export default function CardFilme(props) {
    return (
        <div className="card-filme">
            <p>{props.nome}</p>
            <p>{props.dataCriacao}</p>
            <p>{props.ativo}</p>
            <p>{props.genero}</p>
            
        </div>
    );
}