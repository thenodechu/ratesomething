import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './account.css';

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            valuePassword: "",
            valueEmail: "",
            error: [],
          };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      async handleChange(event) {
        const { name, value } = event.target;
        await this.setState({ [name]: value });
      }
    
    async handleSubmit(event) {
        event.preventDefault();
            let user = {
                name: this.state.value,
                password: this.state.valuePassword,
                email: this.state.valueEmail,
            };
        let response = await fetch("http://localhost:8080/api/post/users/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({ user: user }),
        });
        let db = await response.json();
        this.setState({ error: db });

        
    }
  render() {
    
      return (
        <div className="centerElem">
          
          <div className="">
            <div className="center">
                      <div className="singInOrUp">
                          <a className="signUp">Регистрация</a>
                          <Link  className="nothing" to="/signIn"><a className="singIn">Вход</a></Link>
                      </div><br/>
                      <form onSubmit={this.handleSubmit}>
                          <input className="dataAboutUser"  placeholder="Введите свое имя" type="name" name="value"  onChange={this.handleChange}/><br/><br/>
                          <input className="dataAboutUser"  placeholder="Введите пароль" type="password" name="valuePassword"  onChange={this.handleChange}/><br/><br/>
                          <input className="dataAboutUser"  placeholder="Введите e-mail" type="email"  name="valueEmail"  onChange={this.handleChange}/><br/><br/>
                          <input className="button" type="submit" value="Зарегистрироваться" />
                      </form>
            </div>
            
          </div>
          




          <div className="Error">
            {this.state.error.map((item, index) => {
              if (item.length===22) {
                return (
                  <div className="success" key={index}>
                    <div>
                      <span>{item}</span>
                    </div>
              
                    
                  </div>
                )
              } else {
                return (
                  <div className="textError" key={index}>
                    <div>
                      <span>{item}</span>
                    </div>
              
                    
                  </div>
                )
                  }
                  
               })}
            </div>
        </div>
    );
  }
}

export default Account;
/*
<div className="Error">
                {this.state.error.map((item, index) => {
                  return (
                    <div className="textError" key={index}>
                      <div>
                        <span>{item}</span>
                      </div>
                      <div>
                        <span>Закрыть</span>
                      </div>
                      
                    </div>
                  )
               })}
            </div>
*/