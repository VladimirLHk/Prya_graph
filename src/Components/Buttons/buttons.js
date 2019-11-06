import React from 'react';
import './buttons.css';
import Button from "./Button/button";
import {PERIODS} from "../../constants";
import { connect } from "react-redux";
import { setPeriod } from "../../Redux/actions";

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
