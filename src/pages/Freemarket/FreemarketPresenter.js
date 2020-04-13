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
import Function from "components/Market";
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

export default function FreemarketPresenter() {
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
            <h3>프리마켓 중고거래 사이트</h3>
          </Title>
          <Duration>
            <h4>2018.01 ~ 2018.02</h4>
          </Duration>
          <YouTube
            video="xcd80pPhWEI"
            width="100%"
            height="500px"
            style={{ paddingTop: 30, paddingBottom: 40 }}
          />
          <OutLine>
            <SubTitle>프로젝트 개요</SubTitle>
            <SubDetail>
              <p>네이버 중고나라를 모티브로 만든 웹사이트입니다.</p>
              <p>
                판매자는 자신이 팔고싶은 물건을 자유롭게 가격을 책정해 게시판에
                올릴수있고. 구매자는 적당한가격에 오퍼를넣어 결제시스템을
                이용하여 구매할수있게 개발하였습니다.
              </p>
            </SubDetail>
          </OutLine>
          <SkillContainer>
            <SubTitle>기술스택</SubTitle>
            <SikillMenu>Front-end</SikillMenu>
            <GridDiv>
              <GridContainer>
                <GridItem xs={2}>
                  <Skill title={"PHP"} image={"php"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"HTML"} image={"html"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"CSS"} image={"css"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"Javascript"} image={"js"} />
                </GridItem>
                <GridItem xs={2}>
                  <Skill title={"Bootstrap"} image={"bootstrap"} />
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
                  <Skill title={"Apache"} image={"apache"} />
                </GridItem>
              </GridContainer>
            </GridDiv>
            <SikillMenu>Database / Protocol</SikillMenu>
            <GridDiv>
              <GridContainer>
                <GridItem xs={2}>
                  <Skill title={"Mysql"} image={"mysql"} />
                </GridItem>
              </GridContainer>
            </GridDiv>
          </SkillContainer>
          <FunctionContainer>
            <SubTitle>주요기능</SubTitle>
            <SubDetail>
              <p></p>
            </SubDetail>
            <Content>
              <GridDiv>
                <GridContainer>
                  <GridItem xs={6}>
                    <Function title={"메인 페이지"} image={"market_1"} />
                  </GridItem>
                  <GridItem xs={6}>
                    <Function title={"게시판"} image={"market_2"} />
                  </GridItem>
                </GridContainer>
              </GridDiv>
              <GridDiv>
                <GridContainer>
                  <GridItem xs={6}>
                    <Function title={"게시판 댓글"} image={"market_3"} />
                  </GridItem>
                  <GridItem xs={6}>
                    <Function title={"상품게시판"} image={"market_4"} />
                  </GridItem>
                </GridContainer>
              </GridDiv>
              <GridDiv>
                <GridContainer>
                  <GridItem xs={6}>
                    <Function title={"주소검색"} image={"market_5"} />
                  </GridItem>
                  <GridItem xs={6}>
                    <Function title={"상품결제 시스템"} image={"market_6"} />
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

FreemarketPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}