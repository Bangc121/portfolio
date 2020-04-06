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
  font-size: 14px;
  margin-bottom: 3px;
`;

const Detail = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 200;

`;

const Skill = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 200;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Project = ({ id, imageUrl, title, skill, duration }) => (
  <Link to={`/project/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={imageUrl ? `${imageUrl}` : require(`../assets/${id}.png`)}
        />
      </ImageContainer>
      <Title>{title}</Title>
      <Skill>{skill}</Skill>
    </Container>
  </Link>
);

Project.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default Project;