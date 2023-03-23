import React from "react";
import "./App.css";
import { teams } from "./data";

// Create teams variable that takes in all data from the data.js page
export const Teams = () => {
  return (
    // Use map method to access all basketball team data and return it in the app function
      <div className="team-container">
        {teams.map((team, key) => {
            return (
                <div key={key} className="info">
                    <h2>{team.school}</h2>
                    <h3>Mascot: {team.name}</h3>
                    <h3>Location: {team.city}, {team.state}</h3>
                    <br />
                </div>
            );
            })}
      </div>
  );
};