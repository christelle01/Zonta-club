import React from "react";
import "./App.css";
import ThemeProvider from "./theme";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/common/header/Header";
import Router from "./routes";
import Footer from "./components/common/footer/Footer";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
