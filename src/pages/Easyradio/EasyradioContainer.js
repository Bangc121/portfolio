import React from "react";
import EasyradioPresenter from "./EasyradioPresenter";

export default class extends React.Component{
  state = {
    error: null,
  };
  
  render() {
    return (
      <EasyradioPresenter />
    );
  }
}