/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import PropTypes from "prop-types";
import styled from "styled-components";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import IronImage from 'components/IronImage';
// Import these bad boys B-|
// import IronImage from 'react-image-lazy-load-component';
// import 'react-image-lazy-load-component/build/ironImage.css';
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import backImage2 from "assets/img/intro3.jpg";
import backImage from "assets/img/intro2.jpg";
import fillgi_icon from "assets/img/icon/fillgi_icon.png";
import tictoc_icon from "assets/img/icon/tictoc_icon.png";
import fixyou_icon from "assets/img/icon/fixyou_icon.png";
import radio_icon from "assets/img/icon/radio_icon.png";
import free_icon from "assets/img/icon/free_icon.png";
import ahnlab_icon from "assets/img/icon/ahnlab_icon.png";
import myongji_icon from "assets/img/icon/myongji_icon.png";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

const Block = styled.div`
  height: 90px;
  position: relative;
`;

const Introduce = styled.div`
  position: relative;
  width: 100%;
`;

const IntroTitle = styled.h2`
  font-size: 30px;
  font-weight: 300;
  color: #555555;
  line-height: 200%;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #555555;
  line-height: 160%;
`;

const HistotyText = styled.div`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 5px;
  color: #000;
`;

const History = styled.div`
  width: 100%;
  height: auto;
  margin: 50px 0;
`;

const HistoryTitle = styled.h2`
  font-size: 30px;
  font-weight: 300;
  color: #555555;
  line-height: 200%;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 460px;
  margin: 30px 0;
  /* background-image: url(${props => props.bgImage}); */
  background-position: center center;
  background-size: cover;
`;

const Subtitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 160%;
  color: #000;
  margin-bottom: 5px;
`;

const SubDescription = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #555555;
  line-height: 140%;
`;


export default function ResumePresenter() {
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
        {/* <Keyword></Keyword> */}
        {/* <Backdrop bgImage={loaded} /> */}

        <Backdrop>
          <IronImage srcPreload={backImage2} srcLoaded={backImage} />
        </Backdrop>
        <Introduce>
          <IntroTitle>개발자 소개</IntroTitle>
          <Text>
            모바일앱을 통해 사용자들에게 좋은 서비스와 행복을 주는 매력에 빠져
            프로그래밍의 길을 걷고있습니다.{" "}
          </Text>
          <Text>
            명지대학교 정보통신공학과를 졸업하였고 스스로 개발실력이 부족하다는
            생각이들어 학원과 독학으로 다시 개발공부를 시작하게되었습니다.{" "}
          </Text>
          <Text>
            안드로이드앱개발을 시작으로 웹사이트개발과 서버설계 및 개발까지 아직
            미숙하지만 다양한 개발의 매력을 느끼고 있으며{" "}
          </Text>
          <Text>
            최근에는 react-native에 bridge연결을통해 ios앱을 개발 및
            배포까지하여 실무경험도 조금씩 쌓아가고있습니다.{" "}
          </Text>
          <br />
          <Text>
            다양한 개발 스코프를 경험하였지만 개발을 하면 할수록 제가 아직도
            모르는것이 많다는 생각을합니다.
          </Text>
          <Text>
            그렇기때문에 항상 아는것에 겸손하고 배우는것에 감사를 느끼며
            살고있습니다.
          </Text>
          <br />
          <Text>
            사람들간의 신뢰와 그 신뢰를 바탕으로한 협업을 가장
            중요하게생각합니다.
          </Text>
          <Text>
            결국 먼저 좋은동료가 되어 좋은사람들과 좋은프로젝트를 하고싶은것이
            제가 추구하는 가치입니다.
          </Text>
          <br />
          <Text>반갑습니다, 개발자 김정환입니다.</Text>
        </Introduce>
      </div>

      <div className={classes.container}>
        <History>
          <HistoryTitle>히스토리</HistoryTitle>
          <VerticalTimeline
            className={String}
            animate={false}
            layout={"2-columns"}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2019.09 - present"
              iconStyle={{
                background: "#fff",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              icon={
                <img
                  src={fillgi_icon}
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
              }
            >
              <HistotyText>Flillgi Inc.</HistotyText>
              <Subtitle>멀티플랫폼 노트 어플리케이션</Subtitle>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2019.04 - 2019.07"
              iconStyle={{
                background: "#fff",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              icon={
                <img
                  src={tictoc_icon}
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
              }
            >
              <HistotyText>(주)째깍악어</HistotyText>
              <Subtitle>아이돌봄 매칭 어플리케이션</Subtitle>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2018.10 - 2019.01"
              iconStyle={{
                background: "#fff",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              icon={
                <img
                  src={fixyou_icon}
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
              }
            >
              <HistotyText>FixYou</HistotyText>
              <Subtitle>친구매칭 & 라이브스트리밍 어플리케이션</Subtitle>
              <SubDescription>개인 프로젝트</SubDescription>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2018.03 - 2018.05"
              iconStyle={{
                background: "#fff",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              icon={
                <img
                  src={radio_icon}
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
              }
            >
              <HistotyText>EasyRadio</HistotyText>
              <Subtitle>오디오스트리밍 어플리케이션</Subtitle>
              <SubDescription>개인 프로젝트</SubDescription>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2018.01 - 2018.02"
              iconStyle={{
                background: "#fff",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              icon={
                <img
                  src={free_icon}
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
              }
            >
              <HistotyText>프리마켓</HistotyText>
              <Subtitle>중고거래 웹사이트</Subtitle>
              <SubDescription>개인 프로젝트</SubDescription>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2017.03 - 2017.08"
              iconStyle={{
                background: "#fff",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              icon={
                <img
                  src={ahnlab_icon}
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
              }
            >
              <HistotyText>Ahnlab Inc.</HistotyText>
              <Subtitle>보안회사 EMS개발팀 인턴</Subtitle>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2010.02 - 2018.02"
              iconStyle={{
                background: "#fff",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              icon={
                <img
                  src={myongji_icon}
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
              }
            >
              <HistotyText>명지대학교 정보통신공학과</HistotyText>
              <Subtitle>프로그래밍 입문</Subtitle>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </History>
      </div>
      <Footer />
    </div>
  );
};

ResumePresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}