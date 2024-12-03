import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Offers from "./components/Offers/Offers";
import Footer from "./components/Footer/Footer";
import Description from "./components/Description/Description";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <div className="info">
        <Offers />
        <Description />
      </div>
      <Footer />
    </div>
  );
}

export default App;
