import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 250px;
  background-size: cover;
  border-radius: 2px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 10px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
  }
`;

const Title = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 10px;
`;

const Skill = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 10px;
`;

const Duration = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 10px;
`;

const Project = ({ id, imageUrl, title, skill, duration }) => (
  <Link to={`/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={imageUrl ? `${imageUrl}` : require(`../assets/${id}.png`)}
        />
      </ImageContainer>
      <Title>{title}</Title>
      <Skill>{skill}</Skill>
      <Duration>{duration}</Duration>
    </Container>
  </Link>
);

Project.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired
};

export default Project;