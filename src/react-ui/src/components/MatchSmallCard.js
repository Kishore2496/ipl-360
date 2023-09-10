import { React } from "react";


// import "./App.css";

export const MatchSmallCard = ({match}) => {
  return (
    <div className="MatchSmallCard">
      <p>{match?.team1} V/S {match?.team2}</p>
    </div>
  );
}

