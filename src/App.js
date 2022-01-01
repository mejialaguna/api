import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard";
import {StoreProvider} from "./utils/GlobalState"

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Dashboard />
      </StoreProvider>
    </div>
  );
}

export default App;
