import React, {Component} from 'react';
import './app.css';
// import {cn} from '@bem-react/classname';
// import {IClassNameProps} from "@bem-react/core";
import Chart from "./Components/Chart/chart";
import Buttons from "./Components/Buttons/buttons";

export default class App extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Chart/>
        <Buttons/>
      </div>
    );
  }
};
