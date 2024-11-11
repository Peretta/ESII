import React from 'react';
import './ModalAdicionarEquipe.css';

function ModalAdicionarEquipe({ isOpen, onClose, onSubmit }) {
    if (!isOpen) return null;

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-conteudo" onClick={(e) => e.stopPropagation()}>
                <span className="fechar" onClick={onClose}>&times;</span>
                <h3>Adicionar Nova Equipe</h3>
                <form onSubmit={onSubmit}>
                    <input type="text" id="nomeEquipe" placeholder="Nome da Equipe" required />
                    <button type="submit">Adicionar</button>
                </form>
            </div>
        </div>
    );
}

export default ModalAdicionarEquipe;
