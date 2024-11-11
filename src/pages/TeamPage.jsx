import React, { useState } from 'react';
import BotaoFlutuante from '../components/BotaoFlutuante';
import ModalAdicionarEquipe from '../components/ModalAdicionarEquipe';
import CardEquipe from '../components/CardEquipe';
function TeamsPage() {
    const [teams, setTeams] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddTeam = (event) => {
        event.preventDefault();
        const nomeEquipe = event.target.nomeEquipe.value;
        setTeams([...teams, { nome: nomeEquipe }]);
        setIsModalOpen(false);
    };
    return (
        <section className="teams">
            <h2>Equipes</h2>
            <div className="row-teams">
                {teams.map((team, index) => (
                    <CardEquipe key={index} team={team} onClick={() => console.log(team)} />
                ))}
            </div>
            <BotaoFlutuante onClick={() => setIsModalOpen(true)} />
            <ModalAdicionarEquipe isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddTeam} />
        </section>
    );
}

export default TeamsPage;
