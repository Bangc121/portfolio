/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Blog from "components/Blog";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './SectionCustomStyle.css'
import Slider from "react-slick";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(styles);

const Container = styled.div`
  width: 100vw;
  height: 100%;
  margin: 20px 0;
  position: relative;

  @media (min-aspect-ratio: 16/9) {
    .target {
      max-height: none;
      max-width: 100%;
    }
  }
`;

const BlogContainer = styled.div`
    padding: 20px 30px;
`;

const SlideContainer = styled.div`
    padding: 0 5px;
`;

const Title = styled.div`
  padding-top: 40px;
  font-size: 28px;
`;

const Description = styled.div`
  padding: 20px 0;
  font-size: 18px;
  font-weight: 250;
`;

const ButtonDiv = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          ...style,
          display: "block"
        }}
      >
        <style></style>
      </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block"
        }}
        onClick={onClick}
      />
    );
}

export default function SectionBlog() {
  const classes = useStyles();
  var settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 5000,
    autoplaySpeed: 100,
    slidesToShow: 4,
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
            <p>
              개발하면서 경험한 이슈들을 정리하고있는
              개인블로그입니다.
            </p>
          </Description>
          <BlogContainer>
            <Slider {...settings}>
              <SlideContainer>
                <Blog
                  title={
                    "[React-Native] 리액트 네이티브 Axios로 웹서버 http 통신(요청)하기"
                  }
                  id={16}
                  imageUrl={
                    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbJAv44%2FbtqDkzYuu8y%2FMkPZI7AaxOjrvJEaKWw6oK%2Fimg.png"
                  }
                ></Blog>
              </SlideContainer>
              <SlideContainer>
                <Blog
                  title={
                    "[React-Native] 리액트 네이티브(react-native) 프로젝트 시작하기"
                  }
                  id={14}
                  imageUrl={
                    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FWCsx9%2Fbtqy32xTJ4l%2Fyjr8X8Jk6KeyxRTOkaixl1%2Fimg.png"
                  }
                ></Blog>
              </SlideContainer>
              <SlideContainer>
                <Blog
                  title={
                    "[React-Native] 리액트 네이티브(react-native) 구글 로그인 연동하기"
                  }
                  id={12}
                  imageUrl={
                    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbdBXUv%2FbtqDg5Luh1B%2FQ2CJGRko7DIGIHk8OxAEJK%2Fimg.png"
                  }
                ></Blog>
              </SlideContainer>
              <SlideContainer>
                <Blog
                  title={
                    "[React-Native] react-navigation 사용하여 화면 간 이동하기"
                  }
                  id={13}
                  imageUrl={
                    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FPdMdq%2FbtqDiE7uErM%2FSRN7fjdWxvBPU3VPtOZXFK%2Fimg.png"
                  }
                ></Blog>
              </SlideContainer>
              <SlideContainer>
                <Blog
                  title={
                    "[Node.js] nodejs(express)서버와 Mysql연동해서 사용하기"
                  }
                  id={15}
                  imageUrl={
                    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FOCQj0%2FbtqDk6hqRxt%2FAjkoMzKGY11UNzAzvPGeKK%2Fimg.png"
                  }
                ></Blog>
              </SlideContainer>
              <SlideContainer>
                <Blog
                  title={"[Git] git 저장소 히스토리 삭제 및 초기화하기"}
                  id={11}
                  imageUrl={
                    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcB4UTY%2FbtqDhvwmSvb%2FgLwRN1jkK9QB3FK6pxLeq1%2Fimg.png"
                  }
                ></Blog>
              </SlideContainer>
              <SlideContainer>
                <Blog
                  title={"[Node.js] Nodejs & Express 설치 및 서버구축하기"}
                  id={10}
                  imageUrl={
                    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FvsJKs%2FbtqDky6kXO6%2FVCcrjNKgFaQnDkk6PKCxN1%2Fimg.png"
                  }
                ></Blog>
              </SlideContainer>
            </Slider>
          </BlogContainer>
          <ButtonDiv>
            <div>
              <a href="https://bangc.tistory.com/" target="_blank">
                <Button variant="outlined" color="black">
                  블로그 더보기
                </Button>
              </a>
            </div>
          </ButtonDiv>
        </div>
      </div>
    </Container>
  );
}