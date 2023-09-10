import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TeamTile } from '../components/TeamTile';


import './HomePage.scss';


export const HomePage = () => {

    const [teams, setTeams] = useState([]);
    const { teamName } = useParams();
    useEffect(
        () => {
         const fetchAllTeams = async () => {
            const response = await fetch(`http://localhost:8080/team`);
            const data = await response.json();
            setTeams(data);

         };
         fetchAllTeams();
            


        }, []
    );

    return (
        <div className="HomePage">
            <div className="header-section">
                <h1 className="app-name">IPL 360</h1>
            </div>
            <div className="team-grid">
                { teams.map(team => <TeamTile key={team.id} teamName={team.teamName} total = {team.totalMatches} wins = {team.totalWins} />)}
                { }
            </div>
        </div>
        
    );
}