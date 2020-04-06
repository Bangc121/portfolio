import React from "react";
import styled from "styled-components";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ProjectSection from "components/ProjectSection";
import Skill from "components/Skill";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

const useStyles = makeStyles(styles);

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin-bottom: 20px;
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

export default function SectionSkills() {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.section}>
        <div className={classes.container}>
          <Title>skills</Title>
          <Description>
              <p>프로젝트를 진행하며 사용한 간략한 기술스택입니다.</p>
              <p>더 자세한내용은 프로젝트 상세설명에 확인 하실 수 있습니다.</p>
          </Description>
          <SubTitle>Platform</SubTitle>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={2}>
              <Skill title={"Android"} image={"android"} />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <Skill title={"React"} image={"react"}/>
            </GridItem >
            <GridItem xs={12} sm={12} md={2}>
              <Skill title={"Linux"} image={"linux"} />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
            </GridItem>
          </GridContainer>
          <SubTitle>Language</SubTitle>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={2}>
              <Skill title={"Javascript"} image={"js"} />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <Skill title={"Java"} image={"java"}/>
            </GridItem >
            <GridItem xs={12} sm={12} md={2}>
              <Skill title={"Objective-C"} image={"objective-c"} />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <Skill title={"C언어"} image={"c"}/>
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <Skill title={"PHP"} image={"php"} />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <Skill title={"Python"} image={"python"} />
            </GridItem>
          </GridContainer>
          <SubTitle>Server / Framework</SubTitle>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={2}>
              <Skill title={"Apache"} image={"apache"} />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <Skill title={"Nginx"} image={"nginx"}/>
            </GridItem >
            <GridItem xs={12} sm={12} md={2}>
              <Skill title={"Django"} image={"django"} />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <Skill title={"Node.js"} image={"node"}/>
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <Skill title={"Express.js"} image={"express"} />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <Skill title={"Kurento"} image={"kurento"} />
            </GridItem>
          </GridContainer>
          <SubTitle>Database / Cloud Service</SubTitle>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={2}>
              <Skill title={"Mysql"} image={"mysql"} />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <Skill title={"MariaDB"} image={"mariadb"}/>
            </GridItem >
            <GridItem xs={12} sm={12} md={2}>
              <Skill title={"PostgreSql"} image={"postgresql"} />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <Skill title={"Redis"} image={"redis"}/>
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <Skill title={"aws"} image={"aws"} />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </Container>
  );
}
