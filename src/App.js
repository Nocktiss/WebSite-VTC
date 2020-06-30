import React from "react";
//Router
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
// Custom Root Component
import RootRouter from "./components/RootRouter";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route component={RootRouter} />
      </BrowserRouter>
    </>
  );
};

export default App;
