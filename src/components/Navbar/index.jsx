import React from "react";

import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { FaBars } from "react-icons/fa6";

import classes from "./style.module.scss";

import { Link, useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Setting"];

const index = (props) => {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMove = () => {
    navigate("/movie-editor");
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "left", padding: "20px" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <p style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          Movie App
        </p>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem onClick={handleMove} key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box className={classes["box-nav"]} sx={{ display: "flex" }}>
        <AppBar className={classes["navbar"]} component="nav">
          <div className={classes["container"]}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <FaBars />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                <p style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                  Movie App
                </p>
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button
                    onClick={() => navigate("/movie-setting")}
                    key={item}
                    sx={{ color: "#fff" }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </div>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </>
  );
};

export default index;
