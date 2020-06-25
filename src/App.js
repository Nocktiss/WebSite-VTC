import React from "react";
import "./App.css";
import RootRouter from "./components/RootRouter";

function App() {
  return (
    <>
      <Route component={RootRouter} />
    </>
  );
}

export default App;
