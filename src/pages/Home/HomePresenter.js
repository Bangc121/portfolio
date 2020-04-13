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

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: "red";
`;

const Role = styled.span`
  margin: 10px 0;
  display: block;
  font-size: 30px;
  color: #555555;
  font-weight: 400;
  padding-bottom: 10px;
`;

const Description = styled.p`
  margin-bottom: 30px;
  display: block;
  font-size: 16px;
  font-weight: 400;
  color: #555555;
`;

const ButtonDiv = styled.div`
  margin-bottom: 40px;
`;

const ButtonName = styled.div`
  font-size: 16px;
  font-weight: 300;
`;

export default function HomePresenter() {
  const classes = useStyles();
  return (
    <div>
      <Header
        color="transparent"
        brand="JH Portfolio"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "white"
        }}
      />
      <Container>
        <Parallax image={require("assets/img/main.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={6}>
                <div className={classes.brand}>
                  <Role>Mobile Full-Stack Developer</Role>
                  <Description>
                    Android앱개발을 시작으로 현재 react-native와 nodejs를 사용하여 풀스택개발을
                    하고있습니다. 현실에 안주하지않고 새로운 도전과 배움을
                    즐기는 개발자입니다 :)
                  </Description>
                  <ButtonDiv>
                    <Link to="/resume">
                      <Button variant="contained" color="secondary">
                        <ButtonName>read more</ButtonName>
                      </Button>
                    </Link>
                  </ButtonDiv>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </Container>
      <div className={classNames(classes.main)}>
        {/* <SectionProject /> */}
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