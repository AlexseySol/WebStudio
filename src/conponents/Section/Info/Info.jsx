import React from "react";
import { CardInfo } from "./CardInfo";


import "./Info.scss";



export const Info = ({arrayInfo})=>  {
  return (
   <div className="info_wrapper">
    {
      arrayInfo.map((card)=>{
        return <div ><CardInfo key={card.id} {...card} /></div> 
      })
    }
   </div>
  );
}
