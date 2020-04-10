import React from "react";
import TictocPresenter from "./TictocPresenter";

export default class extends React.Component{
  state = {
    error: null,
  };
  
  render() {
    return (
      <TictocPresenter />
    );
  }
}