import React from "react";
import Topnav from "./components/Topnav";
import Home from "./components/Home";
import Service from "./components/Service";


function App() {
  return (
    <div className="App">
      <Topnav/>
      <Home/>
      <Service/>
      <Resume/>
    </div>
  );
}

export default App;
