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

import image from "assets/homepage.png";
import backImage from "assets/tictoc_main.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

const Block = styled.div`
  height: 90px;
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

export default function TictocPresenter() {
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="포트폴리오"
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
                현재 현재 10만명 정도의 유저를 가지고있으며 기존에 php로
                유지되고있떤 웹앱을 클라이언트는 react-native로 서버는 python
                django rest framework로 이전하는 작업에 투입되었습니다.
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

TictocPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}