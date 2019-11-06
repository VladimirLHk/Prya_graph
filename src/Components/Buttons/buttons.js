import React, {Component} from 'react';
import './buttons.css';
import Button from "./Button/button";
import {PERIODS} from "../../constants";
import { connect } from "react-redux";
import { setPeriod } from "../../Redux/actions";

import {cn} from '@bem-react/classname';
// import {IClassNameProps} from "@bem-react/core";

const periodButtons = ({ activePeriod, setPeriod }) => {
  return (
    <div className="buttons">
      {Object.keys(PERIODS).map(periodKey => {
        const currentPeriod = PERIODS[periodKey];
        return (
          <Button
            key={"button-"+periodKey}
            buttonText = {currentPeriod}
            isPressed = {currentPeriod === activePeriod}
            onClick = {() => {setPeriod(currentPeriod);}}
          />)
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return { activePeriod: state.periodFilter };
};

export default connect(
  mapStateToProps,
  { setPeriod }
)(periodButtons);
