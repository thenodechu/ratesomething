import React from "react";
import Main from "./main/Main";
import RatePage from "./ratePage/RatePage";
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
            <Route exact path="/rateImage/:id" component={RatePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
