import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"

import ChatRoom from "./pages/ChatRoom";


function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/:roomId" component={ChatRoom} />
        <Redirect to="/support" />
      </Switch>
    </Router>
  );
}

export default App;
