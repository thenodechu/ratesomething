import React from "react";
import './menu.css';

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
            <div className="first">
                <span className="logo">Ratesomething</span>
                <p className="mainPage">Главная</p>
                <p className="myPictures">Изображения</p>
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
