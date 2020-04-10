import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from 'react-router-dom';
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import Button from '@material-ui/core/Button';
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionProjects from "./Sections/SectionProjects.js";
import SectionSkills from "./Sections/SectionSkills.js";
import SectionBlog from "./Sections/SectionBlog.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import image from "assets/IMG_8044.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Name = styled.span`
  margin-top: 10px;
  display: block;
  font-size: 32px;
  font-weight: 400;
  text-align: center;
`;

const Role = styled.span`
  margin: 10px 0;
  display: block;
  font-size: 20px;
  font-weight: 250;
  text-align: center;
`;

const Description = styled.p`
  margin-bottom: 30px;
  display: block;
  font-size: 16px;
  font-weight: 200;
  text-align: center;
`;

const ButtonDiv = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Line = styled.hr`
  background: blue;
  border-width: thin;
`;

export default function HomePresenter() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Header
        color="transparent"
        brand="포트폴리오"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
      />
      <Parallax small filter image={require("assets/home2.jpg")} />
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={image} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <div className={classes.brand}>
                    <h2>
                      <Name>김정환</Name>
                    </h2>
                    <h4>
                      <Role>mobile full-stack developer</Role>
                    </h4>
                  </div>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.description}>
            <Description>
              안녕하세요, 현재 react-native와 nodejs를 사용하여 풀스택개발을
              하고있습니다. 다양한 개발스코프를 경험해보았지만, 거기서
              안주하지않고 항상 배우는것을 좋아하고 도전하는것에 두려움이 없는
              주니어 개발자입니다.{" "}
            </Description>
          </div>
          <ButtonDiv>
            <div>
              <Link to="/resume">
                <Button variant="outlined" color="black">read more</Button>
              </Link>
            </div>
          </ButtonDiv>
          <Line />
        </div>
      </div>
      <div className={classNames(classes.main)}>
        <SectionSkills />
        <SectionProjects />
        <SectionBlog />
      </div>
      <Footer />
    </div>
  );
};

HomePresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}