import React from "react";
import { CardTeam } from "./CardTeam";

import "./Team.scss";

export const Team = ({ arrayTeam }) => {
  return (
    <div className="team_wrapper">
      <div className="team_title">Наша команда</div>
      <div className="team_grid">
        {arrayTeam.map((card) => {
          return <CardTeam key={card.id} {...card} />;
        })}
      </div>
    </div>
  );
};
