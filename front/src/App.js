import React from "react";
import Main from "./main/Main";
import UsersPage from "./usersPage/UsersPage";
import RatePage from "./ratePage/RatePage";
import Account from "./account/Account";
import SignIn from "./account/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
          <Switch>
            <Route exact path="/rateImage/:type" component={RatePage} />
          </Switch>
          <Switch>
            <Route exact path="/usersPage/:id" component={UsersPage} />
          </Switch>
          <Switch>
            <Route exact path="/signUp" component={Account} />
          </Switch>
          <Switch>
            <Route exact path="/signIn" component={SignIn} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
