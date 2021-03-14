import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './account.css';

class Account extends React.Component {
  
  render() {
    
      return (
        <div className="centerElem">
          
          <div className="">
            <div className="center">
                      <div className="singInOrUp">
                      <Link  className="nothing" to="/signUp"><a className="singInNew">Регистрация</a></Link>
                          <a className="signUpNew">Вход</a>
                      </div><br/>
                      <form onSubmit={this.handleSubmit}>
                          <input className="dataAboutUser"  placeholder="Введите свое имя" type="name" name="value"  /><br/><br/>
                          <input className="dataAboutUser"  placeholder="Введите пароль" type="password" name="valuePassword"  /><br/><br/>
                          
                          <input className="button" type="submit" value="Войти в аккаунт" />
                      </form>
            </div>
            
          </div>
          




          
        </div>
    );
  }
}

export default Account;
