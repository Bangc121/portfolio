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
  margin-bottom: 5px;
`;

const Skill = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 200;
  margin-bottom: 3px;
`;

const Blog = ({ id, imageUrl, title, skill }) => (
  <a href={`https://bangc.tistory.com/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={imageUrl ? `${imageUrl}` : require(`../assets/${id}.png`)}
        />
      </ImageContainer>
      <Title>{title}</Title>
      <Skill>{skill}</Skill>
    </Container>
  </a>
);

Blog.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default Blog;