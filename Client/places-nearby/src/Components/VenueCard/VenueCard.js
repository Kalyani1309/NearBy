import React from "react";
import { Card, Link } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import CheckIcon from "@mui/icons-material/Check";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LaunchIcon from '@mui/icons-material/Launch';
import AssistantDirectionRoundedIcon from '@mui/icons-material/AssistantDirectionRounded';
import { withRouter } from 'react-router-dom';

class VenueCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {};

  getVenueImage = (img) => {
    return img.prefix + img.width + "x" + img.height + img.suffix;
  };

  navigateToVenueDetailsPage = () =>{
    this.props.history.push('/venueDetails?'+this.props.venue.id);
  }

  render() {
    return (
      <div style={{ margin: 12 }}>
        <Card sx={{ maxWidth: 340, minWidth: 340 }}>
          <CardHeader
            sx={{ padding: 0, height: 0 }}
            action={
              <IconButton style={{ margin: "8px 12px" }}>
                <FavoriteIcon sx={{ fontSize: 30, color: red[500] }} />
              </IconButton>
            }
          />
          <CardMedia onClick={()=> this.navigateToVenueDetailsPage()}
            component="img"
            height="300"
            image={this.getVenueImage(
              this.props.venue.photos.groups[0].items[0]
            )}
            style={{cursor: "pointer"}}
            alt="Venue Image"
          />
          <CardContent>
            <div
              style={{
                textAlign: "initial",
                display: "flex",
                marginBottom: 16,
              }}
              className="chips"
            >
              <div className="categories">
                {this.props.venue.categories.map((category) => (
                  <Chip
                    size="small"
                    style={{
                      backgroundColor: "#2A3659",
                      color: "white",
                      marginRight: 2,
                      marginBottom: 2,
                    }}
                    label={category.shortName}
                    avatar={
                      <Avatar
                        src={category.icon.prefix + "64" + category.icon.suffix}
                      />
                    }
                  />
                ))}
              </div>
              {this.props.venue.verified && (
                <div className="verifed" style={{ marginLeft: "auto" }}>
                  <Chip
                    size="small"
                    variant="outlined"
                    color="success"
                    icon={<CheckIcon />}
                    label="Verified"
                  />
                </div>
              )}
            </div>

            <div
              style={{
                display: "flex",
                placeContent: "space-between",
                marginBottom: 8,
                alignItems: "center",
              }}
            >
              <Typography variant="h6" style={{ color: "#030140", fontSize: '1rem', cursor: "pointer" }} onClick={()=> this.navigateToVenueDetailsPage()}>
                {this.props.venue.name}
              </Typography>
              <Typography
                style={{
                  color: "#" + this.props.venue.ratingColor,
                  fontWeight: "bold",
                }}
              >
                {this.props.venue.rating}
              </Typography>
            </div>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ textAlign: "initial" }}
            >
              {this.props.venue.description
                ? this.props.venue.description
                : "No Information about the the venue is avilable right now. If you know the location shoot out a mail to us by filling the form in the About Us page."}
            </Typography>

            <div style={{display: 'flex', marginTop: 10}}>
              {this.props.venue.url && <Link href={this.props.venue.url} variant="body2" style={{display:"flex",  alignItems: "center"}} underline="hover">Website <LaunchIcon style={{ width: 15, height: 15 }}/></Link> }
              <Link href={this.props.venue.url} variant="body2" style={this.props.venue.url ? {display:"flex",  alignItems: "center", marginLeft: 'auto'} : {display:"flex",  alignItems: "center"}} underline="hover"> <AssistantDirectionRoundedIcon style={{ width: 15, height: 15 }}/>Maps</Link>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "auto"
                }}
              >
                <LocationOnOutlinedIcon style={{ width: 20, height: 20 }} />
                <Typography variant="caption">
                  {this.props.venue.location.city +
                    ", " +
                    this.props.venue.location.state }
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withRouter(VenueCard);
