import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home/index.js";
import Saved from "./Saved"
import {StoreProvider} from "./utils/GlobalState"

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/savedProducts" component={Saved} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
