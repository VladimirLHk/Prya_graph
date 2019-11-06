import React, {Component} from 'react';
import './button.css';
import './button_pressed.css';

export default class Button extends Component {
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