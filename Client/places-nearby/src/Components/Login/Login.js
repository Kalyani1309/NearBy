import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import "./Login.css";
import {
  TextField,
  Typography,
  Box,
  Checkbox,
  FormControlLabel,
  Link,
  Button,
} from "@mui/material";
import MediaQuery from "react-responsive";
import ResetPwdDialog from "../ResetPwdDialog/ResetPwdDialog";
import ForgotPwdDialog from '../ForgotPwdDialog/ForgotPwdDialog';
import { Link as RouterLink } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      password: "",
      rememberMe: false,
      errorStatus: {},
      resetPwdOpen: false,
      forgotPwdOpen: false
    };
  }

  handleChange = (event, name) => {
    this.setState({ [name]: event.target.value });
  };

  handleChangeCheck = (event) => {
    this.setState({ rememberMe: event.target.checked });
  };

  handleBlur = (name) => {
    let errorStatus = this.state.errorStatus;
    if (name === "emailAddress") {
      if (this.state.emailAddress !== "") {
        errorStatus.emailAddress = false;
      } else {
        errorStatus.emailAddress = true;
      }
    }
    this.setState({ errorStatus });
  };

  openResetPwdDialog = () => {
    this.setState({resetPwdOpen: true})
  }

  openForgotPwdDialog = (event) => {
    this.setState({forgotPwdOpen: true})
    event.preventDefault();
  }

  resetPwd = () => {
    // Need to add API changes to reset pwd
    this.closeResetPwd() 
  }

  closeResetPwd = (password) => {
    this.setState({resetPwdOpen: false}) 
  }

  sendPwdResetInstruction = (emailAddress) => {
    // Need to add API changes to send mail
    this.closeForgotPwd();
    this.openResetPwdDialog();
  }

  closeForgotPwd = () => {
    this.setState({forgotPwdOpen: false}) 
  }

  render() {
    return (
      <React.Fragment>
        <Grid container justifyContent="center">
          <Grid item sm={0} md={7}>
            <MediaQuery minWidth={900}>
              <img
                className="login-img"
                src="./Assets/Login.jpeg"
                alt="LoginImage"
              />
            </MediaQuery>
          </Grid>
          <Grid item sm={12} md={5} className="login-container">
            <div className="login">
              <Typography variant="h5">Login</Typography>
              <div className="login-msg">
                <Typography variant="h4" className="welcome-msg">
                  Welcome back to <br></br>
                  <span className="app-login-color">NearBy</span>
                </Typography>
                <Typography variant="caption" className="caption-msg">
                  Enter the credentials to access your account
                </Typography>
              </div>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    margin: "8px 4px",
                    maxWidth: "45ch",
                    width: "100%",
                  },
                }}
              >
                <TextField
                  label="Email Address"
                  required
                  value={this.state.emailAddress}
                  error={this.state.errorStatus.emailAddress}
                  onBlur={() => this.handleBlur("emailAddress")}
                  onChange={(event) => this.handleChange(event, "emailAddress")}
                />
                <TextField
                  label="Password"
                  required
                  type="password"
                  value={this.state.password}
                  onChange={(event) => this.handleChange(event, "password")}
                />
                <div className="login-features">
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={this.state.rememberMe}
                        onChange={this.handleChangeCheck}
                      />
                    }
                    label="Remember me"
                  />
                  <Link component="button"
                    onClick={(event)=>this.openForgotPwdDialog(event)}
                    underline="none"
                    className="forgot-link"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="button-container">
                  <Button
                    variant="contained"
                    size="large"
                    className="signin-btn"
                  >
                    Sign In
                  </Button>
                </div>
                <Typography style={{ marginTop: 16 }}>
                  Don't have an account yet?
                  <Link to="/signup" component={RouterLink} underline="none">
                    {" "}
                    Register here.
                  </Link>
                </Typography>
              </Box>
            </div>
          </Grid>
        </Grid>
        <ResetPwdDialog open={this.state.resetPwdOpen} resetPwd={this.resetPwd} onClose={this.closeResetPwd}/>
        <ForgotPwdDialog open={this.state.forgotPwdOpen} sendPwdResetInstruction={this.sendPwdResetInstruction} onClose={this.closeForgotPwd}/>
      </React.Fragment>
    );
  }
}

export default Login;
