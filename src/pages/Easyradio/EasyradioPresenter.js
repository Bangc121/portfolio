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
import Function from "components/Function";
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
  font-weight: 300;
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
  height: auto;
`;

const GridDiv = styled.div`
  margin-bottom: 50px;
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
            <h3>EasyRadio 오디오스트리밍 어플리케이션</h3>
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
                스트리밍방송을 할 수 있는 어플리케리케이션을 목표로
                개발하였습니다.
              </p>
              <p>
                채팅과 오디오스트리밍을 통해서 통신프로토콜이 어떻게
                동작하는지를 중점적으로 공부할수 있었던 프로젝트입니다.{" "}
              </p>
            </SubDetail>
          </OutLine>
          <SkillContainer>
            <SubTitle>기술스택</SubTitle>
            <SikillMenu>Front-end</SikillMenu>
            <GridDiv>
              <GridContainer>
                <GridItem xs={2}>
                  <Skill title={"Android"} image={"android"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"Java"} image={"java"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"C++"} image={"c++"} />
                </GridItem>
              </GridContainer>
            </GridDiv>
            <SikillMenu>Back-end</SikillMenu>
            <GridDiv>
              <GridContainer>
                <GridItem xs={2}>
                  <Skill title={"AWS"} image={"aws"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"Centos"} image={"centos"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"Nginx"} image={"nginx"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"PHP"} image={"php"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"Javascript"} image={"js"} />
                </GridItem>
              </GridContainer>
            </GridDiv>
            <SikillMenu>Database / Protocol</SikillMenu>
            <GridDiv>
              <GridContainer>
                <GridItem xs={2}>
                  <Skill title={"MariaDB"} image={"mariadb"} />
                </GridItem>
              </GridContainer>
            </GridDiv>
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
            <Content>
              <GridDiv>
                <GridContainer>
                  <GridItem xs={4}>
                    <Function title={"페이스북 로그인"} image={"easy_1"} />
                  </GridItem>
                  <GridItem xs={4}>
                    <Function
                      title={"페이스북친구 연동 & 추가"}
                      image={"easy_2"}
                    />
                  </GridItem>
                  <GridItem xs={4}>
                    <Function
                      title={"얼굴인식 카메라"}
                      image={"easy_3"}
                    />
                  </GridItem>
                </GridContainer>
              </GridDiv>
              <GridDiv>
                <GridContainer>
                  <GridItem xs={4}>
                    <Function
                      title={"오디오스트리밍 방송 & 소켓채팅"}
                      image={"easy_4"}
                    />
                  </GridItem>
                  <GridItem xs={4}>
                    <Function
                      title={"오디오 & 채팅내역 다시보기"}
                      image={"easy_5"}
                    />
                  </GridItem>
                </GridContainer>
              </GridDiv>
            </Content>
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