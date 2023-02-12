import React from "react";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import "./Header.scss";
import { ReactComponent as Menu } from "./menu.svg";


export function Header({ clickCloseModal,clickActivModal,ActivModal}) {
  
  return (
    <>
      <div className="header_wrapper">
        <div  className="logo_header">
          Web<span>Studio</span>
        </div>
        <div  onClick={()=> clickActivModal(true)}>
          <Menu  className="svg_menu" ></Menu>
        </div>
        
      </div>
      <div className="header_backround">
        <div>Ефективні рішення для вашого бізнесу</div>
        <button>Замовити послугу</button>
      </div>
   {
     ActivModal ?  <ModalWindow clickCloseModal={clickCloseModal}></ModalWindow>: false
   }  
  
    </>
  );
}
