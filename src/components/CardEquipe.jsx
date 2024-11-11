import React from 'react';
import './CardEquipe.css';

function CardEquipe({ team, onClick }) {
   
    return (
        <div className="card-team" onClick={() => onClick(team)}>
            <div className="menu-card">
                <div class="opcoes-card" onclick="toggleMenu(this)">
                    <span class="material-symbols-outlined">more_vert</span>
                    <div class="menu-opcoes">
                        <button onclick="editarEquipe(this)">Editar</button>
                        <button onclick="excluirEquipe(this)">Excluir</button>
                    </div>
                </div>
            </div>
            <div className="content-card">
                <h4 class="nome-equipe-card">{team.nome}</h4>
            </div>
        </div>
    );

    
}

export default CardEquipe;
