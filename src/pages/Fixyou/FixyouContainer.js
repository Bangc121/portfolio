import React from "react";
import FixyouPresenter from "./FixyouPresenter";

export default class extends React.Component{
  state = {
    error: null,
  };
  
  render() {
    return (
      <FixyouPresenter />
    );
  }
}