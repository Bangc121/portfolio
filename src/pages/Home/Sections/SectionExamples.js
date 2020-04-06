import React from "react";
import styled from "styled-components";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import landing from "assets/img/landing.jpg";
import profile from "assets/img/profile.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  /*16:9의 비율로 와이드 화면이 된다면 아래처럼 미디어쿼리로 값변경*/
  @media (min-aspect-ratio: 16/9) {
    .target {
      max-height: none;
      max-width: 100%;
    }
  }
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

export default function SectionExamples() {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.section}>
        <div className={classes.container}>
          <Title>projects</Title>
          <Description>
            <p>프로젝트를 진행하며 사용한 간략한 기술스택입니다.</p>
            <p>더 자세한내용은 프로젝트 상세설명에 확인 하실 수 있습니다.</p>
          </Description>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={3}>
              <Link to={`/project/${1}`} className={classes.link}>
                <img
                  src={landing}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <Button color="primary" size="lg" simple>
                  View landing page
                </Button>
              </Link>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Link to={`/project/${2}`} className={classes.link}>
                <img
                  src={profile}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <Button color="primary" size="lg" simple>
                  View profile page
                </Button>
              </Link>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Link to={`/project/${3}`} className={classes.link}>
                <img
                  src={profile}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <Button color="primary" size="lg" simple>
                  View profile page
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={3}>
              <Link to={`/project/${4}`} className={classes.link}>
                <img
                  src={landing}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <Button color="primary" size="lg" simple>
                  View landing page
                </Button>
              </Link>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Link to={`/project/${5}`} className={classes.link}>
                <img
                  src={profile}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <Button color="primary" size="lg" simple>
                  View profile page
                </Button>
              </Link>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Link to={`/project/${6}`} className={classes.link}>
                <img
                  src={profile}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <Button color="primary" size="lg" simple>
                  View profile page
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </Container>
  );
}
