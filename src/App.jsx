import React from "react";
import "./App.scss";
import { Header } from "./conponents/Header/Header";

function App() {
  const [ActivModal, setActivModal] = React.useState(false);
  const [ActivOrder, setActivOrder] = React.useState(false);

  return (
    <div className="wrapper">
      <Header
        setActivModal={setActivModal}
        ActivModal={ActivModal}
        setActivOrder={setActivOrder}
        ActivOrder={ActivOrder}
      ></Header>

    </div>
  );
}

export default App;
