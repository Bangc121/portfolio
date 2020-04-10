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
import Fillgi from "./Sections/Fillgi.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

const Container = styled.div`
  height: 100px;
  position: relative;
  background: #2e5f3e;
`;
export default function DetailPresenter(props) {
  console.log(props);
  const classes = useStyles();

  return (
    <div>
      <Header
        brand="포트폴리오"
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />
      <div className={classes.container}>
        <Container>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

DetailPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};