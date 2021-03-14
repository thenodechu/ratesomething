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
            <a className="mainPage">Главная</a>
          </Link>
            <Link  className="nothing" to="/">
              <a className="myPictures">Cайте</a>
            </Link>
            </div>
            <div className="toRight">
                <div className="second">
                <Link  className="nothing" to="/signIn"><a className="signIn" style={ {margin:"0 50px 0 0px"}}>Войти</a></Link>
                  <Link  className="nothing" to="/signUp"><a className="signUp">Регистрация</a></Link>
                </div>
            </div>
                
      </div>
    );
  }
}

export default Menu;
