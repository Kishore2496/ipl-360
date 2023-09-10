import { React } from "react";

// import "./App.css";

export const MatchDetailCard = ({ match }) => {
  if (!match) return null;
  return (
    <div className="MatchDetailCard">
      <h3>Latest Matches</h3>
      <h4>Match Details</h4>
      <h4>
        {match?.team1} V/S {match?.team2}
      </h4>
    </div>
  );
};
