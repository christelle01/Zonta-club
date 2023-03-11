import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/common/header/Header";
import Router from "./routes";
import Footer from "./components/common/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
