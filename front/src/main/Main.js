import React from "react";
import Menu from "../menu/Menu";
import Categories from "../categories/Categories";


class Main extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Categories />
      </div>
    );
  }
}

export default Main;
