import './App.css';
import React from 'react';
import { useState, useEffect } from "react";
import Preloader from './components/preloader';
import Home from './pages/home';
import "./assets/stylesheet/preloader.css";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return <div className="App">{loader ? <Preloader /> : <Home />}</div>;
}

export default App;
