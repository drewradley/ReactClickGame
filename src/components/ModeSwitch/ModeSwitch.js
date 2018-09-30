import React from "react";
import "./ModeSwitch.css";

const ModeSwitch = props => (
  <button type="button" className="btn btn-primary" onClick={() => props.switchModes()} >
  Switch Modes
  </button>
);

export default ModeSwitch;
