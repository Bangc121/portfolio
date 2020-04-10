import React from "react";
import ResumePresenter from "./ResumePresenter";

export default class extends React.Component{
  state = {
    error: null,
  };

  render() {
    return (
      <ResumePresenter />
    );
  }
}