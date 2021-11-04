import React, { Component } from "react";
import {
  Button,
  TextField,
  Typography,
  Divider,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Checkbox,
  ListItemText,
  Link,
  Avatar,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Search.css";
import axios from "axios";
import VenueCard from "../VenueCard/VenueCard";
import data from "../data";
import suggestionData from "../suggestion";
import unifiedSuggestionData from "../unifiedSuggestion";
import { withRouter } from 'react-router-dom';


const ranges = [
  "10 miles",
  "25 miles",
  "50 miles",
  "100 miles",
  "250 miles",
  "500 miles",
  "above 500 miles",
];

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 224,
      width: 250,
    },
  },
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venueSearchTerm: "",
      location: "",
      selectedRootCategory: [],
      selectedSubCategory: [],
      range: "",
      advanceSearch: false,
      geoLocation: {},
      latitudeLongtude: "",
      venueList: data, //replace with []
      suggestions: [],
      categoryList: [],
      personName: [],
    };
  }

  handleChange = (event, name) => {
    this.setState({ [name]: event.target.value });
    if (name === "venueSearchTerm") {
        //this.getSuggestions();
        let res = { data: unifiedSuggestionData };
        this.setState({ showSuggestion: true,
          suggestions: res.data.response.groups[0].items,
        });
    }
  };

  handleChangeCategory = (event, name) => {
    let value = event.target.value;
    console.log(value);
    this.setState({ [name]: value });
  };

  getAndSetCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((loc) => {
      this.setState({
        geoLocation: loc,
        latitudeLongtude: loc.coords.latitude + "," + loc.coords.longitude,
      });
    });
  };

  componentDidMount = () => {
    this.getAndSetCurrentLocation();
    this.getCategories();
  };

  getCategories = () => {
    const FOURSQUARE_CATEGORIES_BASE_URL =
      "https://api.foursquare.com/v2/venues/categories?";

    let params = {
      client_id: "1LZ5YXM0BJJ23S0ADBADFZV14T3DLHATKVCFPZ4MZQFPJUEC",
      client_secret: "GBUM13WZBZCUPKUV31ON4J5WB3HAFWF5KYWFULDQDB13L2V2",
      v: 20211002,
    };

    // try {
    //   axios
    //     .get(FOURSQUARE_CATEGORIES_BASE_URL + new URLSearchParams(params))
    //     .then((res) => {
    //       this.setState({categoryList: res.data.response.categories})
    //       console.log(res);
    //     });
    // } catch (err) {}
  };

  getData = () => {
    const FOURSQUARE_EXPLORE_BASE_URL =
      "https://api.foursquare.com/v2/venues/explore?";

    const FOURSQUARE_PHOTOS_BASE_URL =
      "https://api.foursquare.com/v2/venues/4b57354df964a5201c2b28e3/photos?";

    const FOURSQUARE_VENUE_BASE_URL =
      "https://api.foursquare.com/v2/venues/4b57354df964a5201c2b28e3?";

    let params = {
      client_id: "H5EETN0LSQSI5BI543FMCNKXV1EYWJFI2FVW3JRGPRSVS4UK",
      client_secret: "MIXINUYYB1S2TB542ZYEA5U1HXS1VCOHNTR41DKR3CLB34CG",
      ll: this.state.latitudeLongtude,
      query: this.state.venueSearchTerm,
      v: 20211002,
      limit: 100,
      radius: 20000,
    };

    let params1 = {
      client_id: "H5EETN0LSQSI5BI543FMCNKXV1EYWJFI2FVW3JRGPRSVS4UK",
      client_secret: "MIXINUYYB1S2TB542ZYEA5U1HXS1VCOHNTR41DKR3CLB34CG",
      VENUE_ID: "4b57354df964a5201c2b28e3",
      v: 20211002,
    };
    try {
      axios
        .get(FOURSQUARE_EXPLORE_BASE_URL + new URLSearchParams(params))
        .then((res) => {
          this.setState({ venueList: res.data.response.groups[0].items });
          console.log(res.data.response.groups[0].items);
        });

      let venueList = [];
      axios
        .get(FOURSQUARE_VENUE_BASE_URL + new URLSearchParams(params1))
        .then((res) => {
          venueList.push(res.data.response.venue);
          console.log(res);
        });

      // axios
      //   .get("https://api.foursquare.com/v2/venues/suggestcompletion?" + new URLSearchParams(params))
      //   .then((res) => {
      //     console.log(res);
      //   });

      // axios
      // .get("https://api.foursquare.com/v2/places/nearby?" + new URLSearchParams(params))
      // .then((res) => {
      //   console.log(res);
      // });

      // axios
      //   .get("https://api.foursquare.com/v2/search/autocomplete?" + new URLSearchParams(params))
      //   .then((res) => {
      //     console.log(res);
      //   });
    } catch (err) {}
  };

  getSuggestions = () => {
    const FOURSQUARE_SUGGESTION_BASE_URL =
      "https://api.foursquare.com/v2/search/autocomplete?";

    let params = {
      client_id: "H5EETN0LSQSI5BI543FMCNKXV1EYWJFI2FVW3JRGPRSVS4UK",
      client_secret: "MIXINUYYB1S2TB542ZYEA5U1HXS1VCOHNTR41DKR3CLB34CG",
      group:"unified",
      ll: this.state.latitudeLongtude,
      query: this.state.venueSearchTerm,
      v: 20211002,
      limit: 100,
      radius: 20000,
    };

    try {
      axios
        .get(FOURSQUARE_SUGGESTION_BASE_URL + new URLSearchParams(params))
        .then((res) => {
          this.setState({showSuggestion: true, suggestions: res.data.response.groups[0].items});
          console.log(res);
        });
    } catch (err) {}
  };

  getVenues = () => {
    this.setState({showSuggestion: false });
    const FOURSQUARE_EXPLORE_BASE_URL =
    "https://api.foursquare.com/v2/venues/explore?";

    let params = {
      client_id: "H5EETN0LSQSI5BI543FMCNKXV1EYWJFI2FVW3JRGPRSVS4UK",
      client_secret: "MIXINUYYB1S2TB542ZYEA5U1HXS1VCOHNTR41DKR3CLB34CG",
      ll: this.state.latitudeLongtude,
      query: this.state.venueSearchTerm,
      v: 20211002,
      limit: 10,
      radius: 20000,
    };
    try {
    axios
        .get(FOURSQUARE_EXPLORE_BASE_URL + new URLSearchParams(params))
        .then((res) => {
          console.log(res.data.response.groups[0].items);
          this.setState({ exploreVenueList: res.data.response.groups[0].items }, () =>this.getVenueDetails());
        });
      } catch (err) {}
  };

  getVenueDetails = async() => {
    const FOURSQUARE_VENUE_BASE_URL =
      "https://api.foursquare.com/v2/venues/";

    let params = {
      client_id: "1LZ5YXM0BJJ23S0ADBADFZV14T3DLHATKVCFPZ4MZQFPJUEC",
      client_secret: "GBUM13WZBZCUPKUV31ON4J5WB3HAFWF5KYWFULDQDB13L2V2",
      VENUE_ID: "4b57354df964a5201c2b28e3",
      v: 20211002,
    };
    try {
      let venueList = [];
      this.state.exploreVenueList.map((venue, idx) => {
        let currentVenueURL = FOURSQUARE_VENUE_BASE_URL + venue.venue.id +"?";
        params.VENUE_ID = venue.venue.id;
        axios
          .get(currentVenueURL + new URLSearchParams(params))
          .then((res) => {
            console.log(res);
            venueList.push(res.data.response.venue);
            if(idx==this.state.exploreVenueList.length-1) {
              this.setState({ venueList});
            }
          });
      });
    } catch (err) {}
  }

  getSelectedCategoryNames = (selected) => {
    let selectedNames = "";
    selected.map((category) => {
      selectedNames += category.name + ", ";
    });
    return selectedNames.slice(0, -2);
  };

  selectedSuggestion = (selectedSuggestion) => {
    this.setState({showSuggestion: false})
    if(selectedSuggestion.type === "query") {
      this.setState({venueSearchTerm: selectedSuggestion.text},()=> this.getVenues())
    } else {
      this.props.history.push('/venueDetails?'+selectedSuggestion.object.id);
    }
  }

  render() {
    return (
      <div className="search-msg">
        <Typography variant="h2">
          Life is short <br></br>and World is wide!
        </Typography>
        <Typography variant="body">
          To get the best of your adventure you just need to leave and go where
          you like.<br></br> We are here to help you out.
        </Typography>

        <div className="search-container">
          <div className="search-form">
            <TextField
              style={{ flexGrow: 3 }}
              placeholder="Enter Venue"
              value={this.state.venueSearchTerm}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="primary" />
                  </InputAdornment>
                ),
              }}
              onFocus={(event)=> this.handleChange(event, "venueSearchTerm") }
              onChange={(event) => this.handleChange(event, "venueSearchTerm")}
            />
            <Divider orientation="vertical" flexItem />
            <TextField
              style={{ flexGrow: 1 }}
              placeholder="Location"
              value={this.state.location}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon color="primary" />
                  </InputAdornment>
                ),
              }}
              onChange={(event) => this.handleChange(event, "location")}
            />
            <Button
              variant="contained"
              style={{
                flexGrow: 1,
                marginLeft: 24,
                maxHeight: 48,
                maxWidth: 128,
              }}
              onClick={this.getSuggestions}
            >
              Search
            </Button>
          </div>
          <div className="advance-btn">
            <Link
              component="button"
              underline="hover"
              variant="subtitle2"
              onClick={() => {
                this.setState({ advanceSearch: !this.state.advanceSearch });
              }}
            >
              Advance Search
            </Link>
          </div>
          {!this.state.showSuggestion && this.state.advanceSearch && (
            <React.Fragment>
              <Divider />
              <div className="search-filter">
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel>Category</InputLabel>
                  <Select
                    multiple
                    value={this.state.selectedRootCategory}
                    onChange={(event) =>
                      this.handleChangeCategory(event, "selectedRootCategory")
                    }
                    input={<OutlinedInput label="Category" />}
                    renderValue={(selected) =>
                      this.getSelectedCategoryNames(selected)
                    }
                    MenuProps={MenuProps}
                  >
                    {this.state.categoryList.map((category, idx) => (
                      <MenuItem key={idx} value={category}>
                        <Checkbox
                          checked={
                            this.state.selectedRootCategory.indexOf(category) >
                            -1
                          }
                        />
                        <ListItemText primary={category.name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel>Sub-Category</InputLabel>
                  <Select
                    multiple
                    value={this.state.selectedSubCategory}
                    onChange={(event) =>
                      this.handleChangeCategory(event, "selectedSubCategory")
                    }
                    input={<OutlinedInput label="Sub-Category" />}
                    renderValue={(selected) =>
                      this.getSelectedCategoryNames(selected)
                    }
                    MenuProps={MenuProps}
                  >
                    {this.state.selectedRootCategory.length === 0 && (
                      <MenuItem key={-1} disabled>
                        <ListItemText primary="Select Atleast one Category" />
                      </MenuItem>
                    )}
                    {this.state.selectedRootCategory.map((rootCategory) =>
                      rootCategory.categories.map((subCategory, idx) => (
                        <MenuItem key={idx} value={subCategory}>
                          <Checkbox
                            checked={
                              this.state.selectedSubCategory.indexOf(
                                subCategory
                              ) > -1
                            }
                          />
                          <ListItemText primary={subCategory.name} />
                        </MenuItem>
                      ))
                    )}
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, width: 200 }}>
                  <InputLabel>Range</InputLabel>
                  <Select
                    value={this.state.range}
                    onChange={(event) => this.handleChange(event, "range")}
                    input={<OutlinedInput label="Range" />}
                    renderValue={(selected) => selected}
                    MenuProps={MenuProps}
                  >
                    {ranges.map((range) => (
                      <MenuItem key={range} value={range}>
                        <ListItemText primary={range} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </React.Fragment>
          )}

          {this.state.showSuggestion && (
            <div
              style={{
                backgroundColor: "white",
                height: 340,
                overflowY: "scroll",
              }}
            >
              {this.state.suggestions.map((suggestion) => (
                <MenuItem onClick={()=>this.selectedSuggestion(suggestion)}>
                  {!suggestion.text.includes("More results for") && (suggestion.type === "query" ? (
                    <Avatar sx={{width:36, height: 36, marginRight: 2}}
                      alt="Icon" 
                      src={
                        suggestion.object.icon.prefix + "60" + suggestion.object.icon.name
                      }
                    />
                  ) :  suggestion.object.bestPhoto && (
                    <Avatar sx={{width:36, height: 36, marginRight: 2}} variant="rounded"
                      alt="Icon"
                      src={
                        suggestion.object.bestPhoto.prefix + "60x60" + suggestion.object.bestPhoto.suffix
                      }
                    />
                  ))}
                  {!suggestion.text.includes("More results for") && suggestion.text}
                </MenuItem>
              ))}
            </div>
          )}
        </div>

        <div
          style={
            this.state.showSuggestion
              ? {
                  display: "flex",
                  flexFlow: "wrap",
                  justifyContent: "center"
                }
              : {
                  marginTop: "30vh",
                  display: "flex",
                  flexFlow: "wrap",
                  justifyContent: "center"
                }
          }
        >
          {this.state.venueList.map((venue, idx) => (
            <VenueCard venue={venue} key={idx} />
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
