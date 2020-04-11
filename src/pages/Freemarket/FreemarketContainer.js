import React from "react";
import FreemarketPresenter from "./FreemarketPresenter";

export default class extends React.Component{
  state = {
    error: null,
  };
  
  render() {
    return (
      <FreemarketPresenter />
    );
  }
}