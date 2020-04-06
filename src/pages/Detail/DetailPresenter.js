import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 50px);
  position: relative;
  background: #2e5f3e;
  color: #4fa46b;
  width: 80%;
  margin: 20px auto 40px;
  clear: both;
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.5;
    z-index: 0;
`;

const DetailPresenter = ({ loading, error }) => (
  <Container>
  </Container>
);

DetailPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default DetailPresenter;