import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

export const MatchPage = ({params}) => {

  const [matches, setMatches] = useState([]);
  // const teamName = "Delhi Capitals";
  const {teamName, year} = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        `http://localhost:8080/team/${teamName}/match?year=${year}`
      );
      const data = await response.json();
      setMatches(data);
    };
    fetchMatches();
  }, []);

  return (
    <div className="MatchPage">
        <div className="year-selector">
            {/* <h3> Select Year </h3> */}
            {/* <YearSelector teamName={teamName} /> */}
        </div>
        <div>
            <h1 className="page-heading">Match Page</h1>
            {
                matches.map(match => <MatchDetailCard key={match.id} teamName={teamName} match={match} />)
            }
        </div>

    </div>
);
};
