import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  font-size: 12px;
  width: 80px;
  margin: 0 auto;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 70px;
  width: 70px;
  background-size: cover;
  border-radius: 2px;
  background-position: center center;
  transition: opacity 0.1s linear;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  margin-bottom: 10px;
  position: relative;
`;

const Title = styled.span`
  display: block;
  font-size: 14px;
  margin-bottom: 3px;
  text-align: center;
`;

const Skill = ({ id, image, title }) => (
    <Container>
      <ImageContainer>
        <Image bgUrl={require(`../assets/${image}.png`)} />
      </ImageContainer>
      <Title>
        {title.length > 18 ? `${title.substring(0, 15)}...` : title}
      </Title>
    </Container>
);

Skill.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default Skill;