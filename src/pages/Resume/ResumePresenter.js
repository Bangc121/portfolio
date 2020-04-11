import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import backImage from "assets/img/intro2.jpg";
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
  font-weight: 400;
  color: #555555;
  line-height: 200%;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #555555;
  line-height: 160%;
`;

const History = styled.div`
  width: 100%;
  margin: 50px 0;
`;

const HistoryTitle = styled.h2`
  font-size: 30px;
  font-weight: 400;
  color: #555555;
  line-height: 200%;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 460px;
  margin: 30px 0;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
`;

const Subtitle = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #555555;
  line-height: 160%;
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
        <Backdrop bgImage={backImage} />
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
            저의 개인적인 바램입니다.
          </Text>
          <br />
          <Text>
            반갑습니다, 회사가 필요로하는 사람이 되고싶은 개발자 김정환입니다.
          </Text>
        </Introduce>
      </div>

      <div className={classes.container}>
        <History>
          <HistoryTitle>히스토리</HistoryTitle>
          <Timeline
            lineColor={"#ddd"}
            animate={false}
            className={classes.container}
          >
            <TimelineItem
              key="001"
              dateText="2020.09 – Present"
              dateInnerStyle={{
                background: "#000000",
                fontSize: 16,
                fontFamily: '"Noto Sans KR"',
                fontWeight: "400"
              }}
              style={{ color: "#000000" }}
            >
              <Text>Flillgi Inc.</Text>
              <Subtitle>멀티플랫폼 노트 어플리케이션</Subtitle>
              <SubDescription>
                Est incididunt sint eu minim dolore mollit velit velit commodo
                ex nulla exercitation. Veniam velit adipisicing anim excepteur
                nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
                officia irure reprehenderit laborum fugiat dolore in elit.
                Adipisicing do qui duis Lorem est.
              </SubDescription>
            </TimelineItem>
            <TimelineItem
              key="002"
              dateText="2019.04 – 2019.07"
              dateInnerStyle={{
                background: "#ddd",
                color: "#000",
                fontSize: 16,
                fontFamily: '"Noto Sans KR"',
                fontWeight: "400"
              }}
            >
              <Text>(주)째깍악어</Text>
              <Subtitle>아이돌봄 매칭서비스</Subtitle>
              <SubDescription>
                Est incididunt sint eu minim dolore mollit velit velit commodo
                ex nulla exercitation. Veniam velit adipisicing anim excepteur
                nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
                officia irure reprehenderit laborum fugiat dolore in elit.
                Adipisicing do qui duis Lorem est.
              </SubDescription>
            </TimelineItem>
            <TimelineItem
              key="002"
              dateText="2018.10 – 2019.01"
              dateInnerStyle={{
                background: "#ddd",
                color: "#000",
                fontSize: 16,
                fontFamily: '"Noto Sans KR"',
                fontWeight: "400"
              }}
            >
              <Text>FixYou</Text>
              <Subtitle>친구매칭 & 라이브방송 어플리케이션</Subtitle>
              <SubDescription>
                Est incididunt sint eu minim dolore mollit velit velit commodo
                ex nulla exercitation. Veniam velit adipisicing anim excepteur
                nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
                officia irure reprehenderit laborum fugiat dolore in elit.
                Adipisicing do qui duis Lorem est.
              </SubDescription>
            </TimelineItem>
            <TimelineItem
              key="002"
              dateText="2018.03 – 2018.05"
              dateInnerStyle={{
                background: "#ddd",
                color: "#000",
                fontSize: 16,
                fontFamily: '"Noto Sans KR"',
                fontWeight: "400"
              }}
            >
              <Text>EasyRadio</Text>
              <Subtitle>오디오 스트리밍 어플리케이션</Subtitle>
              <SubDescription>
                Est incididunt sint eu minim dolore mollit velit velit commodo
                ex nulla exercitation. Veniam velit adipisicing anim excepteur
                nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
                officia irure reprehenderit laborum fugiat dolore in elit.
                Adipisicing do qui duis Lorem est.
              </SubDescription>
            </TimelineItem>

            <TimelineItem
              key="004"
              dateText="2018.01 – 2018.02"
              dateInnerStyle={{
                background: "#ddd",
                color: "#000",
                fontSize: 16,
                fontFamily: '"Noto Sans KR"',
                fontWeight: "400"
              }}
            >
              <Text>프리마켓</Text>
              <Subtitle>중고거래 웹사이트</Subtitle>
              <SubDescription>
                Est incididunt sint eu minim dolore mollit velit velit commodo
                ex nulla exercitation. Veniam velit adipisicing anim excepteur
                nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
                officia irure reprehenderit laborum fugiat dolore in elit.
                Adipisicing do qui duis Lorem est.
              </SubDescription>
            </TimelineItem>
            <TimelineItem
              key="004"
              dateText="2017.03 – 2018.08"
              dateInnerStyle={{
                background: "#ddd",
                color: "#000",
                fontSize: 16,
                fontFamily: '"Noto Sans KR"',
                fontWeight: "400"
              }}
            >
              <Text>AhnLab, Inc</Text>
              <Subtitle>EMS개발팀 인턴</Subtitle>
              <SubDescription>
                Est incididunt sint eu minim dolore mollit velit velit commodo
                ex nulla exercitation. Veniam velit adipisicing anim excepteur
                nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla
                officia irure reprehenderit laborum fugiat dolore in elit.
                Adipisicing do qui duis Lorem est.
              </SubDescription>
            </TimelineItem>
            <TimelineItem
              key="004"
              dateText="2010.02"
              dateInnerStyle={{
                background: "#ddd",
                color: "#000",
                fontSize: 16,
                fontFamily: '"Noto Sans KR"',
                fontWeight: "400"
              }}
            >
              <Text>명지대학교 정보통신공학과 입학</Text>
              <Subtitle>Subtitle</Subtitle>
            </TimelineItem>
          </Timeline>
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