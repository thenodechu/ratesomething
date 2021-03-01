import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './menu.css';

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div className="first">
            <Link  className="nothing" to="/">
              <span className="logo">Ratesomething</span>
          </Link>
          <Link  className="nothing" to="/">
            <p className="mainPage">Главная</p>
          </Link>
            <Link  className="nothing" to="/">
              <p className="myPictures">Оценить</p>
            </Link>
            </div>
            <div className="toRight">
                <div className="second">
                    <p className="signIn">Войти</p>
                    <p className="signUp">Регистрация</p>
                </div>
            </div>
                
      </div>
    );
  }
}

export default Menu;
