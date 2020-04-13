/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import Links from "react-router-dom/Link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {" "}
      <ListItem className={classes.listItem}>
        <Links to="/resume" className={classes.Link}>
          <Button
            color="transparent"
            className={classes.navLink + " " + classes.socialIconsButton}
          >
            <i
              className={
                classes.socialIcons +
                " " +
                classes.marginRight5 +
                " fab fa-facebook"
              }
            />{" "}
            About
          </Button>
        </Links>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          activeClass="active"
          className="skill"
          to="skill"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Button
            color="transparent"
            className={classes.navLink + " " + classes.socialIconsButton}
          >
            <i
              className={
                classes.socialIcons +
                " " +
                classes.marginRight5 +
                " fab fa-twitter"
              }
            />{" "}
            Skills
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          activeClass="active"
          className="project"
          to="project"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Button
            color="transparent"
            className={classes.navLink + " " + classes.socialIconsButton}
          >
            <i
              className={
                classes.socialIcons +
                " " +
                classes.marginRight5 +
                " fab fa-facebook"
              }
            />{" "}
            Projects
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          activeClass="active"
          className="blog"
          to="blog"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Button
            color="transparent"
            className={classes.navLink + " " + classes.socialIconsButton}
          >
            <i
              className={
                classes.socialIcons +
                " " +
                classes.marginRight5 +
                " fab fa-instagram"
              }
            />{" "}
            Blog
          </Button>
        </Link>
      </ListItem>
    </List>
  );
}
