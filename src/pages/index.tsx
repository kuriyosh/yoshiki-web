import React, { FC } from "react"

import {
  IconButton,
  Table,
  TableBody,
  TableRow,
  Typography,
  List,
  ListItem,
  Box,
} from "@mui/material"
import { LinkedIn, Twitter, GitHub } from "@mui/icons-material"

// core components
import GridContainer from "components/Grid/GridContainer"
import GridItem from "components/Grid/GridItem"
import TableCell from "components/Table/TableCell"

import profile from "assets/img/prof.jpg"

import Layout from "components/Layout/Layout"

const IndexPage: FC<{}> = () => {
  return (
    <Layout ogType="website">
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={12} md={6}>
          <Box
            sx={{
              textAlign: "center",
              "& img": {
                maxWidth: "160px",
                width: "100%",
                margin: "0 auto",
                transform: "translate3d(0, -50%, 0)",
              },
            }}
          >
            <Box
              component="img"
              src={profile}
              sx={{
                boxShadow:
                  "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
                maxWidth: "100%",
                height: "auto",
                borderRadius: "50% !important",
              }}
            />

            <Box mt="-80px">
              <Typography
                variant="h3"
                sx={{
                  color: "#3C4858",
                  margin: "1.75rem 0 0.875rem",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontFamily: `"Roboto Slab", "Times New Roman", serif`,
                  display: "inline-block",
                  position: "relative",
                  marginTop: "30px",
                  minHeight: "32px",
                }}
              >
                Yoshiki Kurihara
              </Typography>
              <h6>Software Engineer</h6>
              <IconButton>
                <a href="https://www.linkedin.com/in/yoshiki-kurihara-687869157/">
                  <LinkedIn sx={{ color: "#3C4858" }} />
                </a>
              </IconButton>
              <IconButton>
                <a href="https://github.com/kuriyosh">
                  <GitHub sx={{ color: "#3C4858" }} />
                </a>
              </IconButton>
              <IconButton>
                <a href="https://twitter.com/kuriyosh">
                  <Twitter sx={{ color: "#3C4858" }} />
                </a>
              </IconButton>
            </Box>
            <div>
              <p>
                I work as a software engineer at Yuimedi, Inc. I'm interested in
                web development utilizing React and Serverless architectures.{" "}
                <br /> <b>The icon is my cute pet(leopard gecko).</b>
              </p>
            </div>
          </Box>
        </GridItem>
      </GridContainer>

      <Box
        sx={{
          margin: "1.071rem auto 0",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" sx={{ fontSize: "2rem" }} my={2}>
          Work/Education history
        </Typography>
        <Table aria-label="simple table">
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

        <Typography variant="h2" sx={{ fontSize: "2rem" }} my={2}>
          Skill
        </Typography>
        <p>Windows Server/Active Directory/VDI</p>

        <Typography variant="h2" sx={{ fontSize: "2rem" }} my={2}>
          Interest
        </Typography>
        <p>Linux/React/Serverless architecture</p>

        <Typography variant="h2" sx={{ fontSize: "2rem" }} my={2}>
          Academic Paper
        </Typography>
        <List sx={{ fontSize: "0.75rem" }}>
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

        <Typography variant="h2" sx={{ fontSize: "2rem" }} my={2}>
          Certifications
        </Typography>
        <List sx={{ fontSize: "0.75rem" }}>
          <ListItem>AWS Certified Solutions Architect</ListItem>
        </List>
      </Box>
    </Layout>
  )
}

export default IndexPage
