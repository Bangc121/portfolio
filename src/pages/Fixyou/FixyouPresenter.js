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

export default function FixyouPresenter() {
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
            <h3>Fix You 친구매칭 & 영상스트리밍 어플리케이션</h3>
          </Title>
          <Duration>
            <h4>2018.10 ~ 2019.01</h4>
          </Duration>
          <YouTube
            video="Cx4EBoegzUk"
            width="100%"
            height="500px"
            style={{ paddingTop: 20, paddingBottom: 30 }}
          />
          <OutLine>
            <SubTitle>프로젝트 개요</SubTitle>
            <SubDetail>
              <p>
                나와 맞는 친구를 찾아 소통하고 라이브 방송을 할 수 있는
                어플이라는 기획의도로 출발하였습니다.
              </p>
              <p>
                스트리밍 프로토콜, 웹서버, 데이터베이스를 직접 선정하였고
                포트폴리오용으로 개발하였기때문에 여러가지 기능들을 많이
                다뤄보는 용도로 개발하였습니다.
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
                  <Skill title={"Kotlin"} image={"kotlin"} />
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
                  <Skill title={"Ubuntu"} image={"ubuntu"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"Nginx"} image={"nginx"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"Node.js"} image={"node"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"Netty"} image={"netty"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"Kurento"} image={"kurento"} />
                </GridItem>
              </GridContainer>
            </GridDiv>
            <GridDiv>
              <GridContainer>
                <GridItem xs={2}>
                  <Skill title={"PHP"} image={"php"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"Python"} image={"python"} />
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
                  <Skill title={"Postgresql"} image={"postgresql"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"Redis"} image={"redis"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"Webrtc"} image={"webrtc"} />
                </GridItem>
              </GridContainer>
            </GridDiv>
          </SkillContainer>
          <FunctionContainer>
            <SubTitle>주요기능</SubTitle>
            <Content>
              <GridDiv>
                <GridContainer>
                  <GridItem xs={4}>
                    <Function title={"SNS 로그인"} image={"fixyou_1"} />
                  </GridItem>
                  <GridItem xs={4}>
                    <Function
                      title={"WebRTC 스트리밍 & 채팅"}
                      image={"fixyou_2"}
                    />
                  </GridItem>
                  <GridItem xs={4}>
                    <Function
                      title={"다시보기 녹화 & 재생"}
                      image={"fixyou_3"}
                    />
                  </GridItem>
                </GridContainer>
              </GridDiv>
              <GridDiv>
                <GridContainer>
                  <GridItem xs={4}>
                    <Function
                      title={"관심사유사도에 따른 친구추천"}
                      image={"fixyou_4"}
                    />
                  </GridItem>
                  <GridItem xs={4}>
                    <Function
                      title={"500미터 이내 친구표시"}
                      image={"fixyou_5"}
                    />
                  </GridItem>
                  <GridItem xs={4}>
                    <Function
                      title={"1:1 채팅 & 영어번역"}
                      image={"fixyou_6"}
                    />
                  </GridItem>
                </GridContainer>
              </GridDiv>
              <GridDiv>
                <GridContainer>
                  <GridItem xs={4}>
                    <Function
                      title={"이더리움 지갑생성 & 토큰전송"}
                      image={"fixyou_7"}
                    />
                  </GridItem>
                  <GridItem xs={4}>
                    <Function title={"카카오페이 결제"} image={"fixyou_8"} />
                  </GridItem>
                  <GridItem xs={4}>
                    <Function
                      title={"얼굴인식 카메라 & 마스크"}
                      image={"fixyou_9"}
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

FixyouPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}