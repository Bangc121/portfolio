/* eslint-disable react/jsx-no-target-blank */
import React from "react";
// nodejs library that concatenates classes
import PropTypes from "prop-types";
import styled from "styled-components";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Skill from "components/Skill";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import image from "assets/homepage.png";
import backImage from "assets/tictoc_main.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

const Block = styled.div`
  height: 100px;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 320;
  line-height: 180%;
`;

const Duration = styled.div`
  font-size: 16px;
  font-weight: 180;
  line-height: 180%;
`;

const HomePage = styled.div`
  padding: 10px 0;
  font-size: 16px;
  font-weight: 250;
  color: #004abf;
  line-height: 180%;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 360px;
  margin: 30px 0;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
`;

const OutLine = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
`;

const SubTitle = styled.div`
  font-size: 24px;
  font-weight: 300;
  line-height: 180%;
  margin-bottom: 20px;
`;

const SubDetail = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 180%;
`;

const SkillContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
`;

const SikillMenu = styled.div`
  font-size: 16px;
  font-weight: 250;
  line-height: 180%;
  margin-bottom: 20px;
`;

const GridDiv = styled.div`
  margin-bottom: 50px;
`;

export default function TictocPresenter() {
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="JH Portfolio"
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />
      <Block />
      <div className={classes.container}>
        <Container>
          <Title>
            <h3>째깍악어 아이돌봄 매칭서비스</h3>
          </Title>
          <Duration>
            <h4>2019.09 ~ 2020.04</h4>
          </Duration>
          <image src={image}></image>
          <HomePage>
            <img
              src={image}
              alt="..."
              width="15"
              height="15"
              style={{
                marginRight: 10,
                verticalAlign: "middle",
                height: "100%"
              }}
            />
            <a href="https://www.tictoccroc.com/" target="_blank">
              https://www.tictoccroc.com/
            </a>
          </HomePage>
          <Backdrop bgImage={backImage} />
          <OutLine>
            <SubTitle>프로젝트 개요</SubTitle>
            <SubDetail>
              <p>
                째깍악어는 모바일 앱을 통해 아이 돌봄 교사와 부모를 매칭하는
                서비스를 제공하는 스타트업입니다.
              </p>
              <p>
                개발당시 10만명 정도의 유저를 가지고있었으며 기존에 php로
                유지되고있떤 웹앱을 클라이언트는 react-native로 서버는 python
                django rest framework로 이전하는 작업에 투입되었습니다.
              </p>
            </SubDetail>
          </OutLine>
          <SkillContainer>
            <SubTitle>기술스택</SubTitle>
            <SikillMenu>Front-end</SikillMenu>
            <GridDiv>
              <GridContainer>
                <GridItem xs={2}>
                  <Skill title={"react-native"} image={"react"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"Javascript"} image={"js"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"PHP"} image={"php"} />
                </GridItem>
              </GridContainer>
            </GridDiv>
            <SikillMenu>Back-end</SikillMenu>
            <GridDiv>
              <GridContainer>
                <GridItem xs={2}>
                  <Skill title={"Python"} image={"python"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"Django"} image={"django"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"AWS"} image={"aws"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"Serverless"} image={"serverless"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"Mysql"} image={"mysql"} />
                </GridItem>
              </GridContainer>
            </GridDiv>
            <SikillMenu>Tools</SikillMenu>
            <GridDiv>
              <GridContainer>
                <GridItem xs={2}>
                  <Skill title={"Github"} image={"github"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"Slack"} image={"slack"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"Zeplin"} image={"zeplin"} />
                </GridItem>
              </GridContainer>
            </GridDiv>
          </SkillContainer>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

TictocPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}