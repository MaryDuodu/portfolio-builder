import {
  AppBar,
  Avatar,
  Box,
  Button,
  CssBaseline,
  makeStyles,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Router from "next/router";
import React from "react";
import styles from "./navbar.module.css";

const pages = [
  { title: "Logout", link: "/" },
];

export class DashboardNavbar extends React.Component<{}, { user: any }> {
  constructor(props: any) {
    super(props)

    this.state = {
      user: {}
    }
  }

  handleLogout() {
    if (typeof window != "undefined") {
      localStorage?.removeItem("user");
      Router.push('./')
    }
  }

  componentDidMount() {
    if (typeof window != "undefined") {
      const resp = localStorage?.getItem("user");

      if (resp == null) {
        Router.push('./');
      } else {
        this.setState({ user: JSON.parse(resp) })
      }

    }
  }


  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" style={{ flex: 1 }}>
            Dashboard
          </Typography>

          <MenuItem key="logout" onClick={() => this.handleLogout()}>
            <Typography textAlign="center">
              <a className={styles.link}>Logout</a>
            </Typography>
          </MenuItem>

          <Avatar alt="Remy Sharp" src="/images/profile-img.jpg" />
        </Toolbar>
      </AppBar>
    );
  }
}

export default DashboardNavbar;
