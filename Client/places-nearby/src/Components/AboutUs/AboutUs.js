import { Avatar, Paper, Typography } from "@mui/material";
import React, { PureComponent } from "react";
import ReactPlayer from "react-player";
import "./AboutUs.css";

class AboutUs extends PureComponent {
  render() {
    return (
      <div style={{ margin: "0px 96px 96px 96px" }}>
        <div style={{ textAlign: "center"}}>
          <Typography variant="h4" style={{ margin: "4px 0px 8px 0px" }}>
            Suggest some text Or Lets remove it.
          </Typography>
        </div>
        <div className="video-container">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              controls={true}
              width="100%"
              height="100%"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 64, alignItems: "center" }}>
          <div style={{ width: "50%" }}>
            <div style={{ maxWidth: "85%" }}>
              <Typography variant="h3">Our story</Typography>
              <br></br>
              <Typography variant="body1">
                Our focus is always on finding the best people to work with. Our
                bar is high, but you look ready to take on the challenge. We
                design and implement creative solutions to everyday business
                problems.
              </Typography>
              <br></br>
              <Typography variant="body1">
                We are a team of creative consultants who help bridge the
                digital gap between companies and their clients with websites
                that not only serve as marketing platforms but also provide
                solutions to online business problems and digital marketing
                strategies that connect you with the ideal client and help
                create a loyal customer.
              </Typography>
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <img
              style={{ width: "100%", height: "68vh" }}
              src="./Assets/story.svg"
              alt="storyImage"
            />
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 64 }}>
          <Typography variant="h6" color="text.secondary">
            OUR TEAM
          </Typography>
          <Typography variant="h4" style={{ margin: "4px 0px 12px 0px" }}>
            Small team. Big hearts.
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Our focus is always on finding the best people to work with. Our bar
            is high, but you look ready to take on the challenge.
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "wrap",
            justifyContent: "center",
          }}
        >
          <Paper
            style={{
              display: "flex",
              width: 350,
              padding: 24,
              marginLeft: 16,
              marginTop: 16,
              backgroundColor: "rgb(247, 250, 255)",
              alignItems: "center",
            }}
          >
            <Avatar
              variant="rounded"
              src="./Assets/Image1.jpeg"
              alt="personImg"
              style={{ width: 100, height: 100 }}
            />
            <div style={{ marginLeft: 36 }}>
              <Typography variant="h6">Name</Typography>
              <Typography color="text.secondary">Role</Typography>
            </div>
          </Paper>
          <Paper
            style={{
              display: "flex",
              width: 350,
              marginLeft: 16,
              marginTop: 16,
              padding: 24,
              backgroundColor: "rgb(247, 250, 255)",
              alignItems: "center",
            }}
          >
            <Avatar
              variant="rounded"
              src="./Assets/Image1.jpeg"
              alt="personImg"
              style={{ width: 100, height: 100 }}
            />
            <div style={{ marginLeft: 36 }}>
              <Typography variant="h6">Name</Typography>
              <Typography color="text.secondary">Role</Typography>
            </div>
          </Paper>
          <Paper
            style={{
              display: "flex",
              width: 350,
              marginLeft: 16,
              marginTop: 16,
              padding: 24,
              backgroundColor: "rgb(247, 250, 255)",
              alignItems: "center",
            }}
          >
            <Avatar
              variant="rounded"
              src="./Assets/Image1.jpeg"
              alt="personImg"
              style={{ width: 100, height: 100 }}
            />
            <div style={{ marginLeft: 36 }}>
              <Typography variant="h6">Name</Typography>
              <Typography color="text.secondary">Role</Typography>
            </div>
          </Paper>
          <Paper
            style={{
              display: "flex",
              width: 350,
              marginLeft: 16,
              marginTop: 16,
              padding: 24,
              backgroundColor: "rgb(247, 250, 255)",
              alignItems: "center",
            }}
          >
            <Avatar
              variant="rounded"
              src="./Assets/Image1.jpeg"
              alt="personImg"
              style={{ width: 100, height: 100 }}
            />
            <div style={{ marginLeft: 36 }}>
              <Typography variant="h6">Name</Typography>
              <Typography color="text.secondary">Role</Typography>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default AboutUs;
