import React from "react";
import styled from "styled-components";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ProjectSection from "components/ProjectSection";
import Project from "components/Project";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin-bottom: 70px;
  position: relative;

  @media (min-aspect-ratio: 16/9) {
    .target {
      max-height: none;
      max-width: 100%;
    }
  }
`;

const Title = styled.div`
  padding-top: 40px;
  font-size: 28px;
`;

const Description = styled.div`
  padding: 20px 0;
  font-size: 16px;
  font-weight: 200;
`;

const SubTitle = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  font-weight: 300;
  font-size: 16px;
`;

export default function SectionProjects() {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.section}>
        <div className={classes.container}>
          <Title>projects</Title>
          <Description>
            <p>지금까지 진행한 프로젝트입니다.</p>
            <p>자세한 설명은 프로젝트 상세설명에 확인 하실 수 있습니다.</p>
          </Description>
          <SubTitle>회사 프로젝트</SubTitle>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Project
                title={"Fillgi.inc"}
                id={1}
                skill={
                  "react-native, Javscript, Node.js, objective-c, Mysql, AWS Lambda"
                }
              ></Project>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Project
                title={"째깍악어"}
                id={2}
                skill={
                  "react-native, Javscript, Python django, Mysql, AWS Lambda"
                }
              ></Project>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}></GridItem>
            <GridItem xs={12} sm={12} md={6}></GridItem>
          </GridContainer>
          <SubTitle>개인 프로젝트</SubTitle>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Project title={"Fix you"} id={2}></Project>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Project title={"EasyRadio"} id={2}></Project>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Project title={"프리마켓"} id={5}></Project>
            </GridItem>
          </GridContainer>
          {/* <ProjectSection title={"회사 프로젝트"}>
            <Project
              title={"Fillgi.inc"}
              id={1}
              skill={
                "react-native, Javscript, Node.js, objective-c, Mysql, AWS Lambda"
              }
            ></Project>
            <Project
              title={"째깍악어"}
              id={2}
              skill={
                "react-native, Javscript, Python django, Mysql, AWS Lambda"
              }
            ></Project>
          </ProjectSection>
          <ProjectSection title={"개인 프로젝트"}>
            <Project title={"Fix you"} id={2}></Project>
            <Project title={"EasyRadio"} id={2}></Project>
            <Project title={"프리마켓"} id={5}></Project>
          </ProjectSection> */}
        </div>
      </div>
    </Container>
  );
}
