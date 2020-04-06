import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component{
  state = {
    error: null,
    loading: true
  };

  componentDidMount() {
  }

  render() {
    return (
      <DetailPresenter />
    );
  }
}