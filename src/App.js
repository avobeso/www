/*
 *  Entry-point for the AvoBeso frontend.
 */
import React, { useState, useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ReactTooltip from "react-tooltip";

import MainLayout from "./pages/MainLayout.js";
import {Footer} from "./components/Footer.js";

////////////////////////////////////////////////////////////////////////////////

import "./App.css";

////////////////////////////////////////////////////////////////////////////////

const App = (props) => {
  // Handle logic to recognize the connector currently being activated.
  const [activatingConnector, setActivatingConnector] = React.useState();
  
  ////////////////////////////////////////////////////////////////////////////
  return (
    <div className="App">
      <div className="App-header">
        <NavLink exact activeClassName="isActive" to="/" data-tip data-for="networkInfoTooltip">
          Avobeso Global
        </NavLink>
        <div className="grow"></div>
      </div>
      <div className="App-body">
        <div className="App-scroll">
          <div style={{flexGrow: 1}}>
            <MainLayout />
          </div>
        </div>
      </div>
    </div>
  );
}

////////////////////////////////////////////////////////////////////////////////

export default App;

////////////////////////////////////////////////////////////////////////////////
