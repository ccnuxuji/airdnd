import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SpotIndex from "./components/SpotIndex";
import CreateSpotForm from "./components/CreateSpotForm";
import SpotShow from "./components/SpotShow";
import EditSpotForm from "./components/EditSpotForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route exact path="/" component={SpotIndex} />
        <Route exact path="/spots/new" component={CreateSpotForm} />
        <Route exact path="/spots/current" component={SpotIndex} />
        <Route exact path="/spots/:spotId" component={SpotShow} />
        <Route exact path="/spots/:spotId/edit" component={EditSpotForm} />
      </Switch>
    </>
  );
}

export default App;