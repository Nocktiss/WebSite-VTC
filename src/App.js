import React from "react";
//Router
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
// Custom Root Component
import RootRouter from "./components/RootRouter";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route component={RootRouter} />
      </BrowserRouter>
    </div>
  );
};

export default App;
