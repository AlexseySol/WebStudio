import React from "react";
import "./App.scss";
import { Header } from "./conponents/Header/Header";

import { Section } from "./conponents/Section/Section";
import { ReactComponent as Antenna } from "./conponents/Section/svg/antenna.svg";
import { ReactComponent as Astronaut } from "./conponents/Section/svg/astronaut.svg";
import { ReactComponent as Clock } from "./conponents/Section/svg/clock.svg";
import { ReactComponent as Diagramm } from "./conponents/Section/svg/diagram.svg";
import { ReactComponent as Instagram } from "./conponents/Section/svg/instagram.svg";
import { ReactComponent as Facebook } from "./conponents/Section/svg/facebook.svg";
import { ReactComponent as Twitter } from "./conponents/Section/svg/twitter.svg";
import { ReactComponent as Linkedin } from "./conponents/Section/svg/linkedin.svg";


function App() {
  const [ActivModal, setActivModal] = React.useState(false);
  const [ActivOrder, setActivOrder] = React.useState(false);

  const arrayInfo = [
    {
      id: 1,
      title: "УВАГА ДО ДЕТАЛЕЙ",
      text: "Ідейні міркування, і навіть початок повсякденної роботи з формування позиції.",
      svg: <Antenna />,
    },
    {
      id: 2,
      title: "ПУНКТУАЛЬНІСТЬ",
      text: "Завдання організації, особливо рамки і місце навчання кадрів тягне у себе.",
      svg: <Clock />,
    },
    {
      id: 3,
      title: "ПЛАНУВАННЯ",
      text: "Так само консультація з широким активом значною мірою зумовлює.",
      svg: <Diagramm />,
    },
    {
      id: 4,
      title: "СУЧАСНІ ТЕХНОЛОГІЇ",
      text: "Значимість цих проблем настільки очевидна, що реалізація планових завдань.",
      svg: <Astronaut />,
    },
  ];

  const arrayTeam = [
    {
      id: 1,
      img: "/img/Igor.jpg",
      name: "Ігор Дем'яненко",
      work: "Product Designer",
      inst: (
        <a href="https://www.instagram.com/">
          <Instagram className="team_hover" />
        </a>
      ),
      face: (
        <a href="https://uk-ua.facebook.com/">
          <Facebook className="team_hover" />
        </a>
      ),
      twit: (
        <a href="https://twitter.com/?lang=ua">
          <Twitter className="team_hover" />
        </a>
      ),
      Linked: (
        <a href="https://www.linkedin.com/">
          <Linkedin className="team_hover" />
        </a>
      ),
    },
    {
      id: 2,
      img: "/img/Olga.jpg",
      name: "Ольга Рєпіна",
      work: "Frontend Developer",
      inst: (
        <a href="https://www.instagram.com/">
          <Instagram className="team_hover" />
        </a>
      ),
      face: (
        <a href="https://uk-ua.facebook.com/">
          <Facebook className="team_hover" />
        </a>
      ),
      twit: (
        <a href="https://twitter.com/?lang=ua">
          <Twitter className="team_hover" />
        </a>
      ),
      Linked: (
        <a href="https://www.linkedin.com/">
          <Linkedin className="team_hover" />
        </a>
      ),
    },
    {
      id: 3,
      img: "/img/Mukola.jpg",
      name: "Микола Тарасов",
      work: "Marketing",
      inst: (
        <a href="https://www.instagram.com/">
          <Instagram className="team_hover" />
        </a>
      ),
      face: (
        <a href="https://uk-ua.facebook.com/">
          <Facebook className="team_hover" />
        </a>
      ),
      twit: (
        <a href="https://twitter.com/?lang=ua">
          <Twitter className="team_hover" />
        </a>
      ),
      Linked: (
        <a href="https://www.linkedin.com/">
          <Linkedin className="team_hover" />
        </a>
      ),
    },
    {
      id: 4,
      img: "/img/Michail.jpg",
      name: "Михайло Єрмаков",
      work: "UI Designer",
      inst: (
        <a href="https://www.instagram.com/">
          <Instagram className="team_hover" />
        </a>
      ),
      face: (
        <a href="https://uk-ua.facebook.com/">
          <Facebook className="team_hover" />
        </a>
      ),
      twit: (
        <a href="https://twitter.com/?lang=ua">
          <Twitter className="team_hover" />
        </a>
      ),
      Linked: (
        <a href="https://www.linkedin.com/">
          <Linkedin className="team_hover" />
        </a>
      ),
    },
  ];



  return (
    <div className="wrapper">
      <Header
        setActivModal={setActivModal}
        ActivModal={ActivModal}
        setActivOrder={setActivOrder}
        ActivOrder={ActivOrder}
      ></Header>
      <Section arrayInfo={arrayInfo} arrayTeam={arrayTeam}  />
    </div>
  );
}

export default App;
