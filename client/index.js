import React from "react";
import reactDOM from "react-dom";

import Bands from "./containers/Bands";

const App = () => {
  return <div className="App">
    <h1>Spotify-ish</h1>

    <Bands />

  </div>;
};

reactDOM.render(<App />, document.getElementById("root"));
