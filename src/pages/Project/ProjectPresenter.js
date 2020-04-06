import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "components/Section"
import ProjectSection from "components/ProjectSection";
import Project from "components/Project";

const Container = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  clear: both;
`;

const MainTitle = styled.span`
  display: block;
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 50px;
`;

const MainContent = styled.div`
  font-size: 14px;
  opacity: 0.7;
  line-height: 1.5;
  width: 100%;
`;

const ProjectPresenter = ({ loading, error }) => (
  <Container>
    <ProjectSection title={"회사 프로젝트"}>
      <Project title={"Fillgi.inc"} id={1} skill={"react-native, Javscript, Node.js, objective-c, Mysql, AWS Lambda"}></Project>
      <Project title={"째깍악어"} id={2} skill={"react-native, Javscript, Python django, Mysql, AWS Lambda"}></Project>
    </ProjectSection>
    <ProjectSection title={"개인 프로젝트"}>
      <Project title={"Fix you"} id={2}></Project>
      <Project title={"EasyRadio"} id={2}></Project>
      <Project title={"프리마켓"} id={5}></Project>
    </ProjectSection>
  </Container>
);

ProjectPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default ProjectPresenter;