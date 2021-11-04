import { Avatar, Divider, Paper, Typography } from '@mui/material';
import React, { Component } from 'react';
import "./Footer.css";


class Footer extends Component {
    render() {
        return (
            <Paper className="footer-container">
                <div style={{display: "flex", marginBottom:4, marginTop: -20}}>
                    <Avatar style={{padding:6, margin:16}} variant="square" src="./Assets/facebook-icon.svg"></Avatar>
                    <Avatar style={{padding:6, margin:16}} variant="square" src="./Assets/instagram-icon.svg"></Avatar>
                    <Avatar style={{padding:6, margin:16}} variant="square" src="./Assets/twitter-icon.svg"></Avatar>
                </div>
                <div style={{display:"flex", marginBottom:4}}>
                    <Typography style={{marginRight:6}}>Terms of use</Typography>
                    <Typography>|</Typography>
                    <Typography style={{marginLeft:6}}>Privacy Policy</Typography>
                </div>
                <Typography>© 2021 Places NearBy</Typography>
            </Paper>
        );
    }
}

export default Footer;