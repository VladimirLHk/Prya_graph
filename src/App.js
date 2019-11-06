import React, {Component} from 'react';
import './app.css';
import Chart from "./Components/Chart/chart";
import Buttons from "./Components/Buttons/buttons";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Chart/>
        <Buttons/>
      </div>
    );
  }
};
