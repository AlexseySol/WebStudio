import React from "react";
import "./Footer.scss";
import { ReactComponent as InstagramF } from "./svg/instagram_footer.svg";
import { ReactComponent as TwitterF } from "./svg/twitter_footer.svg";
import { ReactComponent as FacebookF } from "./svg/facebook_footer.svg";
import { ReactComponent as LinkedinF } from "./svg/linkedin_footer.svg";
import { ReactComponent as Btn } from "./svg/btn.svg";



export const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="footer_title">
        Web<span>Studio</span>
      </div>
      <div className="footer_map">м. Київ, пр-т Лесі Українки, 26</div>
      <ul className="footer_contacts">
        <li>
          <a href="mailto:info@devstudio.com">info@devstudio.com</a>
        </li>
        <li>
          <a href="tel:+38 096 111 11 11">+38 096 111 11 11</a>
        </li>
      </ul>
      <h4>приєднуйтесь</h4>
      <ul className="footer_social">
        <li>
          <a href="https://www.instagram.com/"> <InstagramF /> </a>
        </li>
        <li>
          <a href="https://twitter.com/?lang=ua"> <TwitterF /> </a>
        </li>
        <li>
          <a href="https://uk-ua.facebook.com/"> <FacebookF /> </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/"><LinkedinF /></a>
        </li>
      </ul>
      <h4>Підпишіться на розсилку</h4>
      <div className="footer_wrapper_input">
      <input  type="text"  placeholder="E-mail"/>
      </div>
      <div className="footer_btn" >
      <button >Підписатися <Btn className="btn_last" /></button>
      </div>
      
    </div>
  );
};
