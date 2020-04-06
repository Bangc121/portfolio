import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import PropTypes from "prop-types";
import styled from "styled-components";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionProjects from "./Sections/SectionProjects.js";
import SectionSkills from "./Sections/SectionSkills.js";
import SectionBlog from "./Sections/SectionBlog.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default function HomePresenter() {
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Portfolio"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />
      {/* <Backdrop bgImage={require("../../assets/home.jpg")} /> */}
      <Container>
        <Parallax image={require("../../assets/home2.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h2 className={classes.title}>김정환</h2>
                  <h3 className={classes.subtitle}>
                  Mobile Full Stack Developer
                  </h3>
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