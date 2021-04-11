import { container, title } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const profilePageStyle = {
  container,
  pageTitleContainer: {
    textAlign: "center",
	color: "#FFFFFF",
	marginLeft: "auto",
	marginRight: "auto",
	zIndex: 2
  },
  pageTitle: {
	color: "#FFFFFF",
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important"
  },
  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
	paddingTop: "30px",
	paddingBottom: "60px",
	textAlign: "center"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  learnIcon: {
	maxWidth: "100%",
	maxHeight: "15vh"
  },
  learnIconList: {
	marginTop: "10vh",
	marginBottom: "10vh"
  },
  learnLable: {
	fontWeight: 400,
	fontSize: "1.5rem"
  },
  link: {
	color: "inherit"
  }
};

export default profilePageStyle;
