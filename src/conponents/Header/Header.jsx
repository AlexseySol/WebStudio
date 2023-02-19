import React from "react";
import { OrderService } from "../ModalOrderService/OrderService";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import "./Header.scss";
import { ReactComponent as Menu } from "./menu.svg";
import { ReactComponent as Mail } from "./mail.svg";
import { ReactComponent as Phone } from "./phone.svg";

export function Header({
  ActivOrder,
  setActivModal,
  ActivModal,
  setActivOrder,
}) {
  return (
    <>
      <div className="header_wrapper">
        <div className="logo_header">
          Web<span>Studio</span>
        </div>

       
          <ul className="header_navigation">
            <li>
              <a href="#">Студія</a>
            </li>
            <li>
              <a href="#">Портфоліо</a>
            </li>
            <li>
              <a href="#">Контакти</a>
            </li>
          </ul>

          <ul className="header_nav__contacts">
            <li>
              <a href="mailto:info@devstudio.com">
                {" "}
                <Mail /> info@devstudio.com
              </a>
            </li>
            <li>
              <a href="tel:+38 096 111 11 11">
                {" "}
                <Phone /> +38 096 111 11 11
              </a>
            </li>
          </ul>
       
        <div onClick={() => setActivModal(true)}>
          <Menu className="svg_menu"></Menu>
        </div>
      </div>

      <div className="header_backround">
        <div>Ефективні рішення для вашого бізнесу</div>
        <button onClick={() => setActivOrder(true)}>Замовити послугу</button>
      </div>
      {ActivOrder ? (
        <OrderService setActivOrder={setActivOrder}></OrderService>
      ) : (
        false
      )}
      {ActivModal ? (
        <ModalWindow setActivModal={setActivModal}></ModalWindow>
      ) : (
        false
      )}
    </>
  );
}
