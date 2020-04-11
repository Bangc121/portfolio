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
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import YouTube from '@u-wave/react-youtube';

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

const OutLine = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
`

const SubTitle = styled.div`
  font-size: 24px;
  font-weight: 300;
  line-height: 180%;
  padding-top: 30px;
  margin-bottom: 20px;
`;

const SubDetail = styled.div`
  font-size: 16px;
  font-weight: 250;
  line-height: 180%;
`;

const SkillContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
`;

const SikillMenu = styled.div`
  font-size: 16px;
  font-weight: 250;
  line-height: 180%;
  margin-bottom: 20px;
`;

const FunctionContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
`;

const Content = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 700px;
  background-color: grey;
`;

export default function EasyradioPresenter() {
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
            <h4>2019.09 ~ 2020.04</h4>
          </Duration>
          <YouTube
            video="r94_cVIg4Rw"
            width="100%"
            height="500px"
            style={{ paddingTop: 20, paddingBottom: 30 }}
          />
          <OutLine>
            <SubTitle>프로젝트 개요</SubTitle>
            <SubDetail>
              <p>
                저의 첫번째 안드로이드 앱으로 누구든지 쉽게 오디오
                스트리밍방송을 할 수 있는 어플리케리케이션을 개발을 목표로
                개발하였습니다.
              </p>
              <p>
                채팅과 오디오스트리밍개발을 통해서 통신프로토콜이 어떻게
                동작하는지를 중점적으로 공부할수 있었던 프로젝트입니다.{" "}
              </p>
            </SubDetail>
          </OutLine>
          <SkillContainer>
            <SubTitle>기술스택</SubTitle>
            <SikillMenu>Langauge</SikillMenu>
            <SikillMenu>Front-end</SikillMenu>
            <SikillMenu>Back-end</SikillMenu>
            <SikillMenu>Server / Database</SikillMenu>
          </SkillContainer>
          <FunctionContainer>
            <SubTitle>주요기능</SubTitle>
            <SubDetail>
              <p>
                FILLGI Inc.는 미국 LA와 산호세에 위치한 법인으로 글로벌 시장에서
                태블릿과 모바일 디바이스를 넘어 다양한 플랫폼에서 활용가능한
                노트 어플리케이션을 개발하고 있습니다.
              </p>
            </SubDetail>
            <Content></Content>
          </FunctionContainer>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

EasyradioPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}