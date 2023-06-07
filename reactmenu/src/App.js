import React from 'react';
import './App.css';
import Menu from './Menu/Menu';
import { useState } from 'react';
import UIComponent from './Components/Calculator/Calculator';

const App = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    {value: 'Калькулятор', href: '/main'},
    {value:"График 2D", href: '/main'},
    {value:"Фигуры 3D", href: '/main'}
  ];

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };
  return (
    <div className="App">
      <nav>
        <div className="menu-btn" onClick={handleMenuClick}>
          <span/>
        </div>
      </nav>
      <Menu active={menuActive} setActive={setMenuActive} header={"Главная"} items={items}/>

      </div>
      
      
  );
};

export default App;
