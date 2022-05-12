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
import styles from "./navbar.module.css";

const pages = [
  { title: "Logout", link: "/" },
];

function DashboardNavbar() {
  let user: any = {};
  // const classes = useStyles;
  if (typeof window != "undefined") {
    user = localStorage?.getItem("user");
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" style={{ flex: 1 }}>
          Dashboard
        </Typography>

        {pages.map((page) => (
          <MenuItem key={page.title}>
            <Link href={page.link}>
              <Typography textAlign="center">
                <a className={styles.link}> {page.title}</a>
              </Typography>
            </Link>
          </MenuItem>
        ))}

        {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}> */}
          <Avatar alt="Remy Sharp" src="/images/profile-img.jpg" />
        {/* </IconButton> */}
      </Toolbar>
    </AppBar>
  );
}

export default DashboardNavbar;
