import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";

const earthImage = require('../images/earth.jpeg');

const Redirect = (props) => {
  let history = useHistory();
  const {to} = props;
  history.push(to);
  return <></>;
}

const MainLayout = (props) => {
  return (
    <Switch>
      <Route exact path="/">
        <div className="Home-main">
          <div className="jumbotron col">
            <img className="earth-image" src={earthImage} />
            <span>Sustainable and safe recycling to ensure a greener tomorrow</span>
          </div>
        </div>
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default MainLayout;
