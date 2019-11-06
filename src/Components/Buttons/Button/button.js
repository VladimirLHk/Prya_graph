import React, {Component} from 'react';
import './button.css';
import './button_pressed.css';
// import {cn} from '@bem-react/classname';
// import {IClassNameProps} from "@bem-react/core";

export default class Button extends Component {
  // constructor (props) {
  //   super(props);
  //   this.buttonClick = this.buttonClick.bind(this);
  // }
  //
  render() {
    let buttonText = this.props.buttonText;
    let buttonClassName = "button__wrapper " + (this.props.isPressed ? "button_pressed" : "");
    return (
      <div className="button">
        <button type="button" className={buttonClassName} onClick={this.props.onClick}>
          <span className="button__text">{buttonText}</span>
        </button>
      </div>
    );
  }
};