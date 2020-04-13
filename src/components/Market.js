import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 230px;
  width: 500px;
  background-size: cover;
  border-radius: 2px;
  background-position: center center;
  transition: opacity 0.1s linear;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

const Title = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
  text-align: center;
`;

const Market = ({ id, image, title }) => (
  <Container>
    <ImageContainer>
      <Image bgUrl={require(`../assets/${image}.png`)} />
    </ImageContainer>
    <Title>{title}</Title>
  </Container>
);

Market.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired
};

export default Market;