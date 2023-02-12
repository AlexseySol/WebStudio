import React from "react";
import "./ModalWindow.scss";
import { ReactComponent as Close } from "./close_menu.svg";

export const ModalWindow = ({ clickCloseModal }) => {
  return (
    <div className="modal_wrapper">
      <button onClick={() => clickCloseModal(false)}>
        <Close className="modal_close" />
      </button>
      <ul className="modal_nav__menu">
        <li>Студія</li>
        <li>Портфоліо</li>
        <li>Контакти</li>
      </ul>

      <ul className="modal_nav__contacts">
        <li>
          <a href="tel:+38 096 111 11 11">+38 096 111 11 11</a>
        </li>
        <li>
          <a href="mailto:info@devstudio.com">info@devstudio.com</a>
        </li>
      </ul>
      <ul className="modal_nav__social">
        <li><a href="https://www.instagram.com/">Instagram</a></li>
        <li><a href="https://twitter.com/?lang=ru">Twitter</a></li>
        <li><a href="https://uk-ua.facebook.com/">Facebook</a></li>
        <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
      </ul>
    </div>
  );
};
