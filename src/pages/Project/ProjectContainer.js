import React from "react";
import ProjectPresenter from "./ProjectPresenter";

export default class extends React.Component{
  state = {
    error: null,
    loading: true
  };

  componentDidMount() {
  }

  render() {
    return (
      <ProjectPresenter />
    );
  }
}