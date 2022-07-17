import React from "react";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/AllQuotes"></Route> 
      <Route path="/SingleQuote"></Route> 
      <Route path="/NewQuote"></Route>
    </Routes>
  );
}

export default App;
