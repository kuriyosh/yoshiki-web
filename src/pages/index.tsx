import React, { FC } from "react"
// @material-ui/core components
import { IconButton } from "@material-ui/core"
import { Table, TableBody, TableRow } from "@material-ui/core"
import { List, ListItem } from "@material-ui/core"
import { LinkedIn, Twitter, GitHub } from "@material-ui/icons"

// core components
import GridContainer from "components/Grid/GridContainer"
import GridItem from "components/Grid/GridItem"
import TableCell from "components/Table/TableCell"

import profile from "assets/img/prof.jpg"
import profilePageStyle from "assets/jss/pages/profilePage"

import Layout from "components/Layout/Layout"

const IndexPage: FC<{}> = () => {
  const classes = profilePageStyle()
  return (
    <Layout ogType="website">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <div className={classes.profile}>
            <div>
              <img
                src={profile}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgFluid +
                  " " +
                  classes.imgRoundedCircle
                }
              />
            </div>
            <div className={classes.name}>
              <h3 className={classes.title}>Yoshiki Kurihara</h3>
              <h6>Software Engineer</h6>
              <IconButton>
                <a
                  href="https://www.linkedin.com/in/yoshiki-kurihara-687869157/"
                  className={classes.iconLink}
                >
                  <LinkedIn />
                </a>
              </IconButton>
              <IconButton>
                <a
                  href="https://github.com/kuriyosh"
                  className={classes.iconLink}
                >
                  <GitHub />
                </a>
              </IconButton>
              <IconButton>
                <a
                  href="https://twitter.com/kuriyosh"
                  className={classes.iconLink}
                >
                  <Twitter />
                </a>
              </IconButton>
            </div>
            <div>
              <p>
                I work as a software engineer at Yuimedi, Inc. I'm interested in
                web development utilizing React and Serverless architectures.{" "}
                <br /> <b>The icon is my cute pet(leopard gecko).</b>
              </p>
            </div>
          </div>
        </GridItem>
      </GridContainer>

      <div className={classes.description}>
        <h2 className={classes.sectionTitle}>Work/Education history</h2>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell align="center">
                <b>Present</b>
                <br />
                |<br />
                Aug. 2021
              </TableCell>
              <TableCell align="center">
                Software Engineer at Yuimedi, Inc.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                Jul. 2021
                <br />
                |<br />
                Apr. 2019
              </TableCell>
              <TableCell align="center">Support Engineer at AWS</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                Mar. 2019
                <br />
                |<br />
                Apr. 2017
              </TableCell>
              <TableCell align="center">
                Master of Engineering, Computer Networking, Osaka University
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                Mar. 2017
                <br />
                | <br />
                Apr. 2013
              </TableCell>
              <TableCell align="center">
                Bachelor of Engineering, Computer Science, Osaka University
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <h2 className={classes.sectionTitle}>Skill</h2>
        <p>Windows Server/Active Directory/VDI</p>

        <h2 className={classes.sectionTitle}>Interest</h2>
        <p>Linux/React/Serverless architecture</p>

        <h2 className={classes.sectionTitle}>Academic Paper</h2>
        <List className={classes.academicList}>
          <ListItem>
            Yoshiki Kurihara, Yuki Koizumi, Toru Hasegawa and and Mayutan
            Arumaithurai, "Location-based Forwarding with Multi-Destinations in
            NDN Networks," IEICE Transactions on Communications, Sept. 2019.
          </ListItem>
          <ListItem>
            Yoshiki Kurihara, Yuki Koizumi and Toru Hasegawa, "Computing Node
            Selection for Location-based Service in NDN Networks," in
            Proceedings of IEEE International Symposium on Local and
            Metropolitan Area Networks (LANMAN) 2019, July 2019.
          </ListItem>
          <ListItem>
            Kentaro Kita, Yoshiki Kurihara, Koizumi Yuki, and Toru Hasegawa,
            "Location Privacy Protection with a Semi-honest Anonymizer in
            Information Centric Networking," in Proceedings of ACM ICN, Sept.
            2018.
          </ListItem>
          <ListItem>
            Yoshiki Kurihara, Yuki Koizumi and Toru Hasegawa, "Compact Data
            Structures for Location-based Forwarding in NDN Networks," in
            Proceedings of IEEE ICC 2018 Workshop on Information Centric Network
            Solutions for Real-World Applications (ICNSRA 2018), pp. 1-6, May
            2018.
          </ListItem>
          <ListItem>
            Yoshiki Kurihara, Yuki Koizumi and Toru Hasegawa, "Replicating a
            Rendezvous Node for a Core-based Tree Multicast Protocol in NDN
            Networks for Providing Low Latency," IEICE Communications Express,
            Mar. 2018.
          </ListItem>
        </List>

        <h2 className={classes.sectionTitle}>Certifications</h2>
        <List className={classes.academicList}>
          <ListItem>AWS Certified Solutions Architect</ListItem>
        </List>
      </div>
    </Layout>
  )
}

export default IndexPage
