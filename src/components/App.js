import React from "react";
import Catalog from "./organisms/Content";
import Header from "./organisms/Header";
import NavHeader from "./molecules/NavHeader";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <NavHeader/>
      <Catalog/>
    </div>
  );
}
export default App;
