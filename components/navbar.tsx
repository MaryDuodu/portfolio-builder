import { AppBar, Box, Button, CssBaseline, makeStyles, MenuItem, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import styles from './navbar.module.css'

// const useStyles = makeStyles((theme: any) => ({
//     navlinks: {
//         marginLeft: theme.spacing(10),
//         display: "flex",
//     },
//     logo: {
//         flexGrow: "1",
//         cursor: "pointer",
//     },
//     link: {
//         textDecoration: "none",
//         color: "white",
//         fontSize: "20px",
//         marginLeft: theme.spacing(20),
//         "&:hover": {
//             color: "yellow",
//             borderBottom: "1px solid white",
//         },
//     },
// }));

const pages = [

    { title: "About", link: "#about" },
    { title: "Features", link: "#features" },
    { title: "Testimonials", link: "#testimonials" },
    { title: "Login", link: "/login" },
    { title: "Create Account", link: "#signup" }
];

function Navbar() {
    let user: any = {}
    // const classes = useStyles;
    if (typeof window != 'undefined') {
        user = localStorage?.getItem("user")
    }

    return (
        <AppBar position="static">
            {/* <CssBaseline /> */}

            <Toolbar>
                <Typography variant="h4" style={{ flex: 1 }}>
                    PORTFOLIO BUILDER
                </Typography>

                {pages.map((page) => (
                    <MenuItem key={page.title} >
                        <Link href={page.link}>
                            <Typography textAlign="center">
                                <a className={styles.link}> {page.title}</a>
                            </Typography>
                        </Link>
                    </MenuItem>
                ))}

            </Toolbar>
        </AppBar>
    );
}

export default Navbar;