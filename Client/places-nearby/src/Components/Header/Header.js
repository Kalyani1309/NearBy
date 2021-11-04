import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import MediaQuery from "react-responsive";
import './Header.css';
import { Link as RouterLink } from "react-router-dom";


function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: trigger ? {backgroundColor: "#eceff1"} : {},
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

class Header extends Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1, height: "10vh" }}>
        <CssBaseline />
        <ElevationScroll {...this.props}>
          <AppBar color={(window.location.pathname === "/home" || window.location.pathname === "/aboutUs") ? "transparent" : "inherit"} elevation={0}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="app-name">
                NearBy
              </Typography>

              <MediaQuery minWidth={900}>
                <Link to="/home" component={RouterLink} color="inherit" underline="none"
                  className="nav-item">
                  Home
                </Link>
                <Link to="/aboutUs" component={RouterLink} color="inherit" underline="none" 
                  className="nav-item">
                  About Us
                </Link>
                <Link to="login" component={RouterLink} color="inherit" underline="none" 
                  className="nav-item">
                  Login
                </Link>
                <Link to="signup" component={RouterLink} color="inherit" underline="none" 
                  className="nav-item">
                  Sign Up
                </Link>
              </MediaQuery>

              <MediaQuery maxWidth={900}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              </MediaQuery>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </Box>
    );
  }
}

Header.propTypes = {};

export default Header;
