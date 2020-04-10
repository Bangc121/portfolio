import React from "react";
import FillgiPresenter from "./FillgiPresenter";

export default class extends React.Component{
  state = {
    error: null,
  };
  
  render() {
    return (
      <FillgiPresenter />
    );
  }
}