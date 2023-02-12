import React from "react";
import "./OrderService.scss";
import { ReactComponent as CloseOrder } from "./svg/close_order.svg";
import { ReactComponent as Person } from "./svg/person.svg";
import { ReactComponent as Email } from "./svg/email.svg";
import { ReactComponent as Phone } from "./svg/phone.svg";

export const OrderService = ({ setActivOrder }) => {
  return (
    <div className="order_backround">
      <div className="order_wrapper">
        <button onClick={() => setActivOrder(false)}>
          <CloseOrder className="order_btn" />
        </button>
        <div className="title">Залиште свої дані, ми вам передзвонимо</div>

        <div className="order_input__wrapper">
          Ім'я
          <div className="order_input">
            <Person className="person" />
            <input type="text" />
          </div>
        </div>
        <div className="order_input__wrapper">
        Телефон
          <div className="order_input">
            <Email className="person" />
            <input type="text" />
          </div>
        </div>
        <div className="order_input__wrapper">
        Пошта
          <div className="order_input">
            <Phone className="person" />
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};
