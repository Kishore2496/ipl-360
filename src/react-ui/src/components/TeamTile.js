import { React } from "react";
import { Link } from "react-router-dom";

import "./TeamTile.scss";
export const TeamTile = ({ teamName, total, wins }) => {
  const losses = total - wins;

  return (
    <div className="TeamTile">
      <h1 className="team-title">
        <Link to={`/team/${teamName}`}>{teamName}</Link>
      </h1>
      <div className="stats">
        <div>Matches : {total}</div>
        <div>Wins : {wins}</div>
        <div>Lossess : {losses}</div>
      </div>
    </div>
  );
};
