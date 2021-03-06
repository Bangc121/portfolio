/* eslint-disable react/jsx-no-target-blank */
import React from "react";
// nodejs library that concatenates classes
import PropTypes from "prop-types";
import styled from "styled-components";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Skill from "components/Skill";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import image from "assets/homepage.png";
import backImage from "assets/fillgi_main.png";
import funcImage from "assets/fillgi_function.png";

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
  padding-top: 30px;
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

export default function FillgiPresenter() {
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
            <h3>Fillgi 멀티플랫폼 노트 어플리케이션</h3>
          </Title>
          <Duration>
            <h4>2019.09 ~ 2019.04</h4>
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
            <a href="https://fillgi.co/" target="_blank">
              https://fillgi.co/
            </a>
          </HomePage>
          <Backdrop bgImage={backImage} />
          <OutLine>
            <SubTitle>프로젝트 개요</SubTitle>
            <SubDetail>
              <p>
                FILLGI Inc.는 미국 LA와 산호세에 위치한 법인으로 글로벌 시장에서
                태블릿과 모바일 디바이스를 넘어 다양한 플랫폼에서 활용가능한
                노트 어플리케이션을 개발하고 있습니다.
              </p>
              <p>
                사용자의 단순한 노트 작성을 넘어 공유(share),
                협업(collaboration), 판매(Market)에 이르는 확장성을 가진 노트
                제작 플랫폼을 추구하며 런칭하였습니다.
              </p>
              <p>
                메인플랫폼은 react-native로 개발을 진행하였으며,
                노트작성페이지는 브릿지연결을통한 obejctive-c로 구현하였습니다.
              </p>
              <p>
                북미시장을 시작으로 글로벌 시장으로 도전하고자 하며, 현재
                모든개발 및 업데이트는 한국에서 진행중입니다.
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
                  <Skill title={"Objective-C"} image={"objective-c"} />
                </GridItem>
              </GridContainer>
            </GridDiv>
            <SikillMenu>Back-end</SikillMenu>
            <GridDiv>
              <GridContainer>
                <GridItem xs={2}>
                  <Skill title={"Node.js"} image={"node"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"Express.js"} image={"express"} />
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
                  <Skill title={"Jira"} image={"jira"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"Avocode"} image={"avocode"} />
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

FillgiPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}