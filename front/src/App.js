import React from "react";
import Menu from "./menu/Menu";
import Categories from "./categories/Categories";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Categories/>
      </div>
    );
  }
}

export default App;
