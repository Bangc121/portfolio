import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component{
  state = {
    error: null,
  };

  render() {
    return (
      <HomePresenter />
    );
  }
}