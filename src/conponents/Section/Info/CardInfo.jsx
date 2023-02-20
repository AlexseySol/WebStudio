import React from "react";

import "./Info.scss";



export const CardInfo = ({title,text,svg})=>  {
  return (
   <div className="wrapper_card_info" >
    <div className="svg_background">{svg}</div>
<h3>{title}</h3>
<span>{text}</span>
   </div>
  );
}
