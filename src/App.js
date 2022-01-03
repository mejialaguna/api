import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Saved from "./Saved"
import {StoreProvider} from "./utils/GlobalState"

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="savedProducts/yourProducts" component={Saved}/>
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
