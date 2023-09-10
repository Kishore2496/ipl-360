import { React } from "react";
import { Link } from "react-router-dom";

export const MatchSmallCard = ({ match, teamName }) => {
  if (!match) return null;

  const otherTeam = match.team1 == teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/team/${otherTeam}`;

  return (
    <div className="MatchSmallCard">
      <h3>
        V/S 
         <Link to={otherTeamRoute}>{otherTeam}</Link>
      </h3>
      <p>
        {" "}
        {match.matchWinnder} won by {match.resultMargin} {match.result}
      </p>
    </div>
  );
};
