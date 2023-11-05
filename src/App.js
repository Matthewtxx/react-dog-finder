import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import Nav from "./Nav";
import dogs from "./Dogs";


function App() {
  return (
    <BrowserRouter>
      <Nav dogs={dogs} />
      <Routes>
        <Route path="/dogs" element={<DogList dogs={dogs} />} />
        <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
        <Route path="/" element={<Navigate to="/dogs" />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
