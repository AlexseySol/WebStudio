import React from "react";

import "./Team.scss";

export const CardTeam = ({ img, name, work, inst, face, twit, Linked }) => {
  return (
    <div className="team_card__wrapper">
      <img src={img} alt="alt" />
      <h3>{name}</h3>
      <span>{work}</span>
      <ul>
        <li>{inst}</li>
        <li>{face}</li>
        <li>{twit}</li>
        <li>{Linked}</li>
      </ul>
    </div>
  );
};
