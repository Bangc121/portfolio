import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component{
  constructor(props){
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }

  componentDidMount() {
  }

  render() {
    const { name } = this.state;
    return (
      <DetailPresenter name={name}/>
    );
  }
}