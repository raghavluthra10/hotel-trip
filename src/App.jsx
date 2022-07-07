import "./App.scss";
import { Button } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/navbar/header";
import routes from "./routes/index";
import Components from "./pages/Components";
import If from "./components/If";
import Home from "./pages/Home";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
