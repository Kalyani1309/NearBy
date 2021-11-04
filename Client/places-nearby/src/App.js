import React from "react";
import "./App.css";
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import { Typography } from "@mui/material";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";

function App() {
  
  const location = useLocation();

  return (
      <div
        style={
          location.pathname === "/home"
            ? { backgroundImage: "url('./Assets/search.jpeg')" }
            : {}
        }
        className="search-backgrd-img"
      >
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/home">
            <Search />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
        </Switch>
        <Footer />
      </div>
  );
}

export default App;
