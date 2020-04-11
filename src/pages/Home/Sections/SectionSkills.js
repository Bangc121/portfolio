import React from "react";
import styled from "styled-components";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Skill from "components/Skill";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

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
  padding-top: 60px;
  font-size: 30px;
  font-weight: 400;
  color: #555555;
`;

const Description = styled.div`
  padding: 20px 0;
  font-size: 16px;
  font-weight: 400;
  color: #555555;
`;

const SubTitle = styled.span`
  position: relative;
  display: block;
  width: 300px;
  padding: 30px 0;
  font-weight: 400;
  font-size: 20px;
  color: #555555;
`;

const GridDiv = styled.div`
  margin-bottom: 50px;
`;

export default function SectionSkills() {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.section}>
        <div className={classes.container}>
          <Title>Skills</Title>
          <Description>
            <p style={{ lineHeight: "160%" }}>
              더 자세한 기술사용내역은 프로젝트 상세설명에서 확인 하실 수
              있습니다.
            </p>
          </Description>
          <SubTitle>Platform</SubTitle>
          <GridDiv>
            <GridContainer>
              <GridItem xs={2}>
                <Skill title={"Android"} image={"android"} />
              </GridItem>
              <GridItem xs={2}>
                <Skill title={"React"} image={"react"} />
              </GridItem>
              <GridItem xs={2}>
                <Skill title={"Linux"} image={"linux"} />
              </GridItem>
            </GridContainer>
          </GridDiv>
          <SubTitle>Language</SubTitle>
          <GridDiv>
            <GridContainer>
              <GridItem xs={2}>
                <Skill title={"Javascript"} image={"js"} />
              </GridItem>
              <GridItem xs={2}>
                <Skill title={"Java"} image={"java"} />
              </GridItem>
              <GridItem xs={2}>
                <Skill title={"Objective-C"} image={"objective-c"} />
              </GridItem>
              <GridItem xs={2}>
                <Skill title={"C언어"} image={"c"} />
              </GridItem>
              <GridItem xs={2}>
                <Skill title={"PHP"} image={"php"} />
              </GridItem>
              <GridItem xs={2}>
                <Skill title={"Python"} image={"python"} />
              </GridItem>
            </GridContainer>
          </GridDiv>
          <SubTitle>Server / Framework</SubTitle>
          <GridDiv>
          <GridContainer>
            <GridItem xs={2}>
              <Skill title={"Apache"} image={"apache"} />
            </GridItem>
            <GridItem xs={2}>
              <Skill title={"Nginx"} image={"nginx"} />
            </GridItem>
            <GridItem xs={2}>
              <Skill title={"Django"} image={"django"} />
            </GridItem>
            <GridItem xs={2}>
              <Skill title={"Node.js"} image={"node"} />
            </GridItem>
            <GridItem xs={2}>
              <Skill title={"Express.js"} image={"express"} />
            </GridItem>
            <GridItem xs={2}>
              <Skill title={"Kurento"} image={"kurento"} />
            </GridItem>
          </GridContainer>
          </GridDiv>
          <SubTitle>Database / Cloud Service</SubTitle>

          <GridContainer>
            <GridItem xs={2}>
              <Skill title={"Mysql"} image={"mysql"} />
            </GridItem>
            <GridItem xs={2}>
              <Skill title={"MariaDB"} image={"mariadb"} />
            </GridItem>
            <GridItem xs={2}>
              <Skill title={"PostgreSql"} image={"postgresql"} />
            </GridItem>
            <GridItem xs={2}>
              <Skill title={"Redis"} image={"redis"} />
            </GridItem>
            <GridItem xs={2}>
              <Skill title={"aws"} image={"aws"} />
            </GridItem>
            <GridItem xs={2}></GridItem>
          </GridContainer>
        </div>
      </div>
    </Container>
  );
}
