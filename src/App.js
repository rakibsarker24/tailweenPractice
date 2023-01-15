import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/"/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

