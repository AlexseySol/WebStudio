import React from "react";
import { ReactComponent as Logo1 } from "../svg/Logo1.svg";
import { ReactComponent as Logo2 } from "../svg/Logo2.svg";
import { ReactComponent as Logo3 } from "../svg/Logo3.svg";
import { ReactComponent as Logo4 } from "../svg/Logo4.svg";
import { ReactComponent as Logo5 } from "../svg/Logo5.svg";
import { ReactComponent as Logo6 } from "../svg/Logo6.svg";

import "./Clients.scss";

export const Clients = () => {
  return (
    <div className="clients_wrapper">
      <h2 >Постійні клієнти</h2>
      <div className="wrapper_card_clients">
        <div >
          <Logo1 className="logo_wrapper" />
        </div>
        <div >
          <Logo2  className="logo_wrapper" />
        </div>
        <div >
          <Logo3 className="logo_wrapper" />
        </div>
        <div >
          <Logo4 className="logo_wrapper" />
        </div>
        <div >
          <Logo5 className="logo_wrapper" />
        </div>
        <div >
          <Logo6 className="logo_wrapper" />
        </div>
      </div>
    </div>
  );
};
