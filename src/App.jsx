import "./App.scss";
import { Button } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/navbar/header";
import routes from "./routes/index";
import Components from "./pages/Components";
import If from "./components/If";
import Home from "./pages/Home";
import React from "react";
import { Login } from "./pages/Auth";
import { SignUp } from "./pages/Auth";
import List from "./pages/List";
import HotelPage from "./pages/HotelPage";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/list" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/hotel/:id" element={<HotelPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
