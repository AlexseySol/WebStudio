import React from "react";
import { Clients } from "./Clients/Clients";
import { Info } from "./Info/Info";

import "./Section.scss";
import { Team } from "./Team/Team";

export const Section = ({ arrayInfo, arrayTeam }) => {
  return (
    <>
      <div className="section_wrapper">
        <Info arrayInfo={arrayInfo} />
      </div>
      <Team arrayTeam={arrayTeam} />
      <Clients />
    </>
  );
};
