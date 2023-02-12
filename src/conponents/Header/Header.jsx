import React from "react";
import { OrderService } from "../ModalOrderService/OrderService";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import "./Header.scss";
import { ReactComponent as Menu } from "./menu.svg";


export function Header({ActivOrder,setActivModal,ActivModal,setActivOrder}) {
  
  return (
    <>
      <div className="header_wrapper">
        <div  className="logo_header">
          Web<span>Studio</span>
        </div>
        <div  onClick={()=> setActivModal(true)}>
          <Menu  className="svg_menu" ></Menu>
        </div>
        
      </div>
      <div className="header_backround">
        <div>Ефективні рішення для вашого бізнесу</div>
        <button onClick={()=>setActivOrder(true)}>Замовити послугу</button>
      </div>
      {ActivOrder ? <OrderService setActivOrder={setActivOrder}></OrderService> : false}
   {
     ActivModal ?  <ModalWindow setActivModal={setActivModal}></ModalWindow>: false
   }  
  

  
    </>
  );
}
