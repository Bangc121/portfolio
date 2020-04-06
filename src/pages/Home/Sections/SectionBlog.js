import React from "react";
import styled from "styled-components";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ProjectSection from "components/ProjectSection";
import Project from "components/Project";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const useStyles = makeStyles(styles);

const Container = styled.div`
  width: 100vw;
  margin-bottom: 70px;
  position: relative;

  @media (min-aspect-ratio: 16/9) {
    .target {
      max-height: none;
      max-width: 100%;
    }
  }
`;

const SlideContainer = styled.div`
    padding: 10px;
`;

const Title = styled.div`
  padding-top: 40px;
  font-size: 28px;
`;

const Description = styled.div`
  padding: 20px 0;
  font-size: 16px;
  font-weight: 200;
`;

const SubTitle = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  font-weight: 300;
  font-size: 16px;
`;

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
}

export default function SectionBlog() {
  const classes = useStyles();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <Container>
      <div className={classes.section}>
        <div className={classes.container}>
          <Title>Blog</Title>
          <Description>
            <p>개인 블로그 내용입니다.</p>
          </Description>
          <Slider {...settings}>
            <SlideContainer>
              <Project title={"[React-Native] 리액트 네이티브 Axios로 웹서버 http 통신(요청)하기"} id={2} imageUrl={"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbBQrVV%2FbtqzbDDPzfJ%2F0Lsl8Pq814dYCNfkYqaRA1%2Fimg.png"}></Project>
            </SlideContainer>
            <SlideContainer>
              <Project title={"[React-Native] 리액트 네이티브(react-native) 프로젝트 시작하기"} id={2} imageUrl={"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FWCsx9%2Fbtqy32xTJ4l%2Fyjr8X8Jk6KeyxRTOkaixl1%2Fimg.png"}></Project>
            </SlideContainer>
            <SlideContainer>
              <Project title={"[React-Native] 리액트 네이티브(react-native) 구글 로그인 연동하기"} id={2} imageUrl={"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F6iNXW%2Fbtqy03oWNZ8%2Fwst1pn60FN2sOQ3kozqkY0%2Fimg.png"}></Project>
            </SlideContainer>
            <SlideContainer>
              <Project title={"4"} id={2}></Project>
            </SlideContainer>
            <SlideContainer>
              <Project title={"5"} id={2}></Project>
            </SlideContainer>
            <SlideContainer>
              <Project title={"6"} id={2}></Project>
            </SlideContainer>
          </Slider>
          {/* <SubTitle>개인 프로젝트</SubTitle>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Project title={"Fix you"} id={2}></Project>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Project title={"EasyRadio"} id={2}></Project>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Project title={"프리마켓"} id={5}></Project>
            </GridItem>
          </GridContainer> */}
        </div>
      </div>
    </Container>
  );
}