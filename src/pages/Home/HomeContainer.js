import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component{
  state = {
    error: null,
    loading: true
  };

  componentDidMount() {
  }

  render() {
    return (
      <HomePresenter />
    );
  }
}