import React from "react";
import styled from "styled-components";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Project from "components/Project";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

const Container = styled.div`
  width: 100vw;
  height: 100%;
  margin: 20px 0;
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
  font-size: 18px;
  font-weight: 250;
`;

const SubTitle = styled.span`
  position: relative;
  display: block;
  width: 300px;
  padding: 30px 0;
  font-weight: 300;
  font-size: 18px;
`;

export default function SectionProjects() {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.section}>
        <div className={classes.container}>
          <Title>Projects</Title>
          <Description>
            <p style={{ lineHeight: "160%" }}>
              개발시작단계부터 현재까지 제가 경험한 크고작은 프로젝트를
              정리해보았습니다.
            </p>
            <p style={{ lineHeight: "160%" }}>
              자세한내용은 프로젝트 상세설명에 확인 하실 수 있습니다.
            </p>
          </Description>
          <SubTitle>회사 프로젝트</SubTitle>
          <GridContainer>
            <GridItem xs={4}>
              <Project
                title={"Fillgi"}
                id={"fillgi"}
                skill={
                  "react-native, Javscript, Node.js, objective-c, Mysql, AWS Lambda"
                }
                duration={"2019.09 ~ 2020.04"}
              ></Project>
            </GridItem>
            <GridItem xs={4}>
              <Project
                title={"째깍악어"}
                id={"tictoc"}
                skill={
                  "react-native, Javscript, Python Django REST framework, Mysql, AWS Lambda"
                }
                duration={"2019.04 ~ 2020.07"}
              ></Project>
            </GridItem>
          </GridContainer>
          <SubTitle>개인 프로젝트</SubTitle>
          <GridContainer>
            <GridItem xs={4}>
              <Project
                title={"Fix you"}
                id={"fixyou"}
                skill={
                  "Android, Ubuntu, Java, Kotlin, PHP, Python, Javascript, Nginx, Netty, Node.js, WebRtc... "
                }
                duration={"2018.10 ~ 2019.01"}
              ></Project>
            </GridItem>
            <GridItem xs={4}>
              <Project
                title={"EasyRadio"}
                id={"tictoc"}
                skill={
                  "Android, Java, PHP, C++, Javascript, MariaDB"
                }
                duration={"2018.03 ~ 2018.05"}
              ></Project>
            </GridItem>
            <GridItem xs={4}>
              <Project
                title={"프리마켓"}
                id={5}
                skill={
                  "Javscript, PHP, HTML, CSS, Apache, Bootstrap, CentOS, MySql"
                }
                duration={"2018.01 ~ 2018.02"}
              ></Project>
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
