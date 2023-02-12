import React from 'react';
import './App.scss';
import { Header } from './conponents/Header/Header';


function App() {

  const [ActivModal,setActivModal] = React.useState(false)

let clickActivModal =()=>{
  setActivModal(true)
}
let clickCloseModal =()=>{
  setActivModal(false)
}
  return (
    <div className="wrapper">
<Header clickCloseModal={clickCloseModal} clickActivModal={clickActivModal} ActivModal={ActivModal} ></Header>
    </div>
  );
}

export default App;
